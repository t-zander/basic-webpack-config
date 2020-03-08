/* This is a config file that webpack will use */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // where to put bundled js file
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
