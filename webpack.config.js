const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          } 
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
    }, 
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
        '/': 'htpp://localhost:3000',
        secure: true,
        changeOrigin: true,
    }
  }
}