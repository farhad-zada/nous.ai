const AppError = require("../../../utils/appError");
require("dotenv").config();

module.exports = (...roles) => {
  return (req, res, next) => {
    // If the role of the user not allowed to reach this branch throw an error
    if (!roles.includes(req.user.role)) {
      // console.log(req.user.role)
      return next(new AppError("Something went wrong!", 403));
    }
    // Else allow to continue
    next();
  };
};
