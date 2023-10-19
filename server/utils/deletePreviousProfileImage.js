// const catchAsync = require('./catchAsync')
// const media = require('../controllers/media/index')

// module.exports = catchAsync(async (req, res, next) => {
//   if (!req.urlToBeDeleted) {
//     next()
//   }

//   const filePath = decodeURIComponent(
//     req.urlToBeDeleted.match(/mime-mime(.*)$/)[1],
//   )

//   if (filePath) {
//     await media.deleteGS(filePath)
//   }

//   req.urlToBeDeleted = undefined
//   next()
// })
