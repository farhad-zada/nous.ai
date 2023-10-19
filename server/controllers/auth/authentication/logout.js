module.exports = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expiresIn: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 3600 * 1000
    ),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
  });
};
