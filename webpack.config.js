const path = require('path');
const htmlWebpackPlugin =require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');


const config = {
  // mode: "development",
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js',
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
    new htmlWebpackPlugin({
      template: 'src/index.html',
      title: 'My Reads from LinkedIn Learning Course',
    }),
  ],
}

module.exports = config;