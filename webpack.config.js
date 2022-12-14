const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  devtool: 'eval-source-map',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'client')]
      }
    ],
  },
  resolve:{
    extensions: ['.ts', '.js', '.tsx','.jsx']
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