// Dependencias
const Path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const WebpackBar = require('webpackbar')
const AutoDllPlugin = require('autodll-webpack-plugin')

// Importamos el .env
const EnvParsed = Dotenv.config({ path: __dirname + '/.env.dev' }).parsed

/**
 * Recopilamos los modulos.
 */
const envKeys = Object.keys(EnvParsed).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(EnvParsed[next])
  return prev
}, {})

/**
 * Exportamos la configuración de webpack.
 */
module.exports = {
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  entry: ['@babel/polyfill', Path.resolve(__dirname, '../src/index.jsx')],
  output: {
    path: Path.resolve(__dirname, '../public'),
    filename: 'assets/js/bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
  },

  module: {
    rules: [
      // Loader: Js
      {
        test: /\.m?(js|jsx)$/,
        include: Path.join(__dirname, '../src'),
        exclude: /("node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              sourceMap: true,
            },
          },
        ],
      },

      // File Loader
      {
        test: /\.(jpe?g|png|gif|svg|)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        options: {
          name: '[name].[ext]',
          outputPath: '../assets/img',
        },
      },

      // File Loader
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        options: {
          name: '[name].[ext]',
          outputPath: '../assets/css/fonts',
        },
      },

      // Loader: Scss
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true,
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    watchContentBase: false,
    contentBase: Path.join(__dirname, '../public'),
    index: 'index.html',
    port: 3000,
    https: false,
    hot: true,
    historyApiFallback: true,

    // Open Browser
    open: true,
  },

  plugins: [
    new WebpackBar({
      name: 'Weather Time - Desarrollo',
    }),

    new Webpack.DefinePlugin(envKeys),
    new DuplicatePackageCheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: Path.resolve(__dirname, '../template/index.html'),
    }),

    // Pre-compilaciòn de dependencias.
    new AutoDllPlugin({
      inject: true,
      filename: '[name]_[hash].js',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'react-router-dom',
          'redux',
          'redux-persist',
          'redux-devtools-extension',
          'redux-logger',
          'connected-react-router',
        ],
      },
    }),

    // Actualización en vivo.
    new Webpack.HotModuleReplacementPlugin(),
  ],
}
