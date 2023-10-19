const { join } = require("path");
const app = require(join(__dirname, "app"));
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI_SECURE = process.env.MONGODB_URI_SECURE;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

const MONGODB_URI = MONGODB_URI_SECURE.replace(/<password>/, MONGODB_PASSWORD);

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`\nnous listening @${PORT} ✨`);
});
