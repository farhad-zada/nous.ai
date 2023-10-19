const crypto = require('crypto')

const catchAsync = require('../../../utils/catchAsync')

const User = require(`./../../../models/userModel`)

require('dotenv').config()

const AppError = require(`../../../utils/appError`)
// const verifiedView = require('../../../HTMLs/verifiedView')
// const invalidRequest = require('../../../HTMLs/invalidRequest')

module.exports = catchAsync(async (req, res, next) => {
  const verificationToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex')

  const user = await User.findOne({
    verificationToken: verificationToken,
    verificationExpires: {
      $gte: new Date(),
    },
  })

  if (!user) {
    // return res.status(200).send(invalidRequest())
    return next(
      new AppError('Invalid or expired verification link!'),
    )
  }
  user.verified = true
  user.verificationToken = undefined
  user.verificationExpires = undefined
  await user.save({ validateBeforeSave: false })

  // res.status(200).send(verifiedView(user.name))
  res.status(200).json({
    status: 'success',
    user,
  })

  //TODO: Handle this better
  //TODO: ELMIR -> As user gets verified, they also should be automatically LOGGED IN
})
