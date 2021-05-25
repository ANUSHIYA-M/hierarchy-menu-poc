const Path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/Menu.js",
  output: {
    path: Path.join(__dirname, "public"),
    filename: "index_bundler.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: Path.join(__dirname, "public")
  }
};
