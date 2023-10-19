const jwt = require('jsonwebtoken')
const { promisify } = require('util')
require('dotenv').config()
const AppError = require(`${__dirname}/../../../utils/appError`)
const catchAsync = require('../../../utils/catchAsync')
const User = require(`${__dirname}/../../../models/userModel`)

module.exports = catchAsync(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt
  }

  if (!token) {
    return next(
      new AppError(
        'You are not logged in. To continue please log in.',
        403,
      ),
    )
  }

  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET,
  )

  const user = await User.findById(decoded.id)

  if (!user) {
    return next(
      new AppError(
        'Incorrect credidentials. Please, log in with a valid account.',
        401,
      ),
    )
  }

  if (user.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'User credidentials expired. Please, log in again.',
        401,
      ),
    )
  }

  req.user = user
  next()
})
