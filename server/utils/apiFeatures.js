class APIFeatures {
  constructor(query, queryString) {
    this.query = query
    this.queryString = queryString
  }

  filter(...restricted) {
    const queryObj = { ...this.queryString }
    let excludedFields = ['page', 'limit', 'sort', 'fields']
    restricted.forEach((el) => excludedFields.push(el))

    excludedFields.forEach((el) => delete queryObj[el])

    let queryString = JSON.stringify(queryObj)

    queryString = JSON.parse(
      queryString.replace(
        /\bgte|gt|lte|lt\b/,
        (match) => `$${match}`,
      ),
    )

    this.query = this.query.find(queryString)

    return this
  }

  limitFields(...restricted) {
    let fields
    if (this.queryString.fields) {
      fields = this.queryString.fields
        .split(',')
        .map((el) => {
          if (
            !restricted.includes(el) |
            `-${restricted.includes(el)}` |
            `+${restricted.includes(el)}`
          ) {
            return el
          }
        })
        .join(' ')
    } else {
      fields = '-__v'
    }
    this.query.select(fields)
    return this
  }

  sort(...restricted) {
    let sortBy
    if (this.queryString.sort) {
      sortBy = this.queryString.sort
        .split(',')
        .map((el) => {
          if (
            !restricted.includes(el) |
            `-${restricted.includes(el)}` |
            `+${restricted.includes(el)}`
          ) {
            return el
          }
        })
        .join(' ')
    } else {
      sortBy = undefined
    }

    this.query.sort(sortBy)

    return this
  }

  paginate(max) {
    const page = this.queryString.page * 1 || 1

    const limit = Math.min(
      this.queryString.limit * 1 || 10,
      max,
    )
    //Here we consider if some bitch tries to read very large number of docs

    const skip = (page - 1) * limit

    this.query.skip(skip).limit(limit)
    return this
  }
}

module.exports = APIFeatures
