// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: '/src/index.tsx',
//   mode: 'production',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//       // {
//       //   test: /\.tsx?/,
//       //   exclude: /node_modules/,
//       //   use: {
//       //     loader: "babel-loader",
//       //     options: {
//       //       presets: ['@babel/preset-env', '@babel/preset-react'],
//       //     }
//       //   }
//       // },
//     ],
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: './src/index.html',
//     }),
//   ],
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   devServer: {
//     hot: true,
//     open: true,
//     historyApiFallback: true,
//     proxy: {
//       '/': 'http://localhost:3000',
//       secure: true,
//       changeOrigin: true,
//     },
//   },
// };

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/src/index.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.tsx?/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //     }
      //   }
      // },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
