const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js', 
    admin: './src/admin.js' 
  },
  output: {
    filename: '[name].bundle.js', 
    path: path.resolve(__dirname, 'public'), 
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      chunks: ['main'], 
      filename: 'index.html', 
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'admin.html'),
      chunks: ['admin'],
      filename: 'admin.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }, 
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
