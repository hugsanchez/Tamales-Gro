const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry:{
    path: path.join(__dirname, './client/index.jsx'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <html>
        <head>
          <title>Tamales Gro.</title>
        </head>
        <body>
          <div id='app'></div>
        </body>
      </html>
      `,
    })
  ]
};

module.exports = webpackConfig;