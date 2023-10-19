const AppError = require('../../../utils/appError')
const catchAsync = require('../../../utils/catchAsync')
require('dotenv').config()
const User = require(`${__dirname}/../../../models/userModel`)
const createSendToken = require(`./createSendToken`)

module.exports = catchAsync(async (req, res, next) => {
  const { currentPassword, password, passwordConfirm } =
    req.body

  const user = await User.findById(req.user.id).select(
    '+password',
  )

  if (
    !(await user.correctPassword(
      currentPassword,
      user.password,
    ))
  ) {
    return next(
      new AppError(
        'Your current password is incorrect. Please, try again.',
        400,
      ),
    )
  }

  if (!(password && passwordConfirm)) {
    return next(
      new AppError(
        'Please, enter your password and password confirmation.',
        400,
      ),
    )
  }

  req.user.password = password
  req.user.passwordConfirm = passwordConfirm
  await req.user.save()

  createSendToken(req.user, 200, res)
})
