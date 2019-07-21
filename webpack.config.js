const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin =require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');
const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom'];


const config = {
  // mode: "development",
  // entry: `${APP_DIR}/index.js`,
  entry: {
    bundle: `${APP_DIR}/index.js`,
    vendor: VENDOR_LIBS,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpе?g|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'My Reads from LinkedIn Learning Course',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

module.exports = config;