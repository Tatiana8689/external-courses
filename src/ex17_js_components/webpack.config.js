const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main_bundle.js",
    publicPath: "",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9005,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
          },         
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
                exportLocalsConvention: "camelCase",
                localIdentName:
                  "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: './image',
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
  ],
};
