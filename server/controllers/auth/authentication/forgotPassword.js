const validator = require("validator");

const AppError = require("../../../utils/appError");

const catchAsync = require("../../../utils/catchAsync");

const User = require(`../../../models/userModel`);

const sendEmail = require("../../../utils/sendMail");

const forgetPasswordTemplate = require(`${__dirname}/../../../mailTemplate/forgetPassword`);

require("dotenv").config();

//TODO: test this
module.exports = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError("Request needs to include email at body.", 400));
  }

  if (!validator.isEmail(email)) {
    return next(new AppError("Invalid email!", 400));
  }

  const user = await User.findOne({ email });

  const resetToken = user.createToken("passwordResetToken");

  await user.save({ validateBeforeSave: false });

  const emailSubject = "Reset Your Password for MiME Account";

  //RESET URL
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/u/resetPassword/${resetToken}`;

  const emailHTML = forgetPasswordTemplate(resetUrl);

  const info = await sendEmail(email, emailSubject, emailHTML);
  res.json({ status: "success", data: { resetUrl } });
});
