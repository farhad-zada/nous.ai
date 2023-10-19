const express = require("express");
const { join } = require("path");
const userRoutes = require(join(__dirname, "routes", "userRoutes.js"));
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/u/", userRoutes);

module.exports = app;
