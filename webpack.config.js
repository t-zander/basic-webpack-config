/* This is a config file that webpack will use */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    someMath: "./src/someMath.js"
  },
  // Takes all entry files
  // creates index.html for us
  // inserts script tags with appropriate paths
  // specified in entry object above
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new CleanWebpackPlugin()
  ],
  // where to put bundled js file
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    // Here we can tell webpack how to handle each extension
    // and what loader to use for it
    rules: [
      /* IMAGES */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      /* FONTS */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      /* STYLES */
      {
        test: /\.css$/, // test is file extension as regexp
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i, // sass or scss
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
