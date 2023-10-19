const AppError = require('../../../utils/appError')
const catchAsync = require('../../../utils/catchAsync')
require('dotenv').config()
const User = require(`${__dirname}/../../../models/userModel`)
const crypto = require('crypto')
const createSendToken = require('./createSendToken')

//TODO: test this
module.exports = catchAsync(async (req, res, next) => {
  const { token } = req.params
  const { password, passwordConfirm } = req.body

  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex')

  const user = await User.findOne({
    passwordResetToken: hashedToken,
  })
  console.log(user)
  if (!password || !passwordConfirm) {
    return next(
      new AppError(
        'Please, enter your password and confirmation of the password',
        400,
      ),
    )
  }
  user.password = password
  user.passwordConfirm = passwordConfirm
  user.passwordResetToken = undefined
  user.passwordResetExpires = undefined

  await user.save()

  createSendToken(user, 200, res)
})
