const express = require("express");
const { join } = require("path");
const userRoutes = require(join(__dirname, "routes", "userRoutes.js"));
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/u/", userRoutes);

module.exports = app;