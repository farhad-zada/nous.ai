const express = require("express");
const auth = require(`../controllers/auth/index`);
// const user = require(`../controllers/userController`)
// const deletePreviousProfileImage = require('../utils/deletePreviousProfileImage')

const router = express.Router();

router.route("/signup").post(auth.authentication.signup);
router.route("/verifyEmail/:token").get(auth.authentication.verifyEmail);
router.route("/login").get(auth.authentication.login);
router.route("/logout").get(auth.authentication.logout);
router.route("/forgotPassword").get(auth.authentication.forgotPassword);
router.route("/resetPassword/:token").post(auth.authentication.resetPassword);

router
  .route("/updatePassword")
  .post(auth.authentication.authed, auth.authentication.updatePassword);

// router
//   .route("/profile")
//   .post(
//     auth.authentication.authed,
//     user.uploadProfile,
//     deletePreviousProfileImage,
//     user.returnUpdatedUser
//   )
//   .delete(
//     auth.authentication.authed,
//     user.deleteProfile,
//     deletePreviousProfileImage,
//     user.returnUpdatedUser
//   );

module.exports = router;
