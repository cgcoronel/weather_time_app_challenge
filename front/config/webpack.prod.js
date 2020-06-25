// Dependencias
const Path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv')
const WebpackBar = require('webpackbar')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssNano = require('cssnano')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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

// Exportamos la configuración de webpack.
module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', Path.resolve(__dirname, '../src/index.jsx')],
  output: {
    path: Path.resolve(__dirname, '../public'),
    filename: 'assets/js/bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
  },

  module: {
    rules: [
      // Loader: Js
      {
        test: /\.m?(js|jsx)$/,
        include: Path.join(__dirname, '../src'),
        exclude: /(node_modules|bower_components)/,
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
          outputPath: './assets/img',
        },
      },

      // File Loader
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/css/fonts',
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
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new WebpackBar({
      name: 'Weather Time / Production',
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin([
      {
        from: Path.resolve(__dirname, '../template/assets'),
        to: Path.resolve(__dirname, '../public/assets'),
      },
      {
        from: Path.resolve(__dirname, '../template/favicon.png'),
        to: Path.resolve(__dirname, '../public/favicon.png'),
      },
    ]),

    new Webpack.DefinePlugin(envKeys),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: Path.resolve(__dirname, '../template/index.html'),
    }),

    new AutoDllPlugin({
      inject: true,
      filename: '[name]_[hash].js',
      entry: {
        vendor: ['react', 'react-dom'],
      },
    }),
  ],

  optimization: {
    // Divide el peso en diferentes archivos para evitar duplicación
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },

    minimizer: [
      // Optimizador de js.
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: 'all', // Elimina comentarios.
      }),

      // Optimizador de Css Final
      new OptimizeCSSAssetsPlugin({
        cssProcessor: CssNano,
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
        canPrint: false,
      }),
    ],
  },
}
