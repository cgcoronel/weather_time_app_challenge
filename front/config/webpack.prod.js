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
  // Modo de compilaciòn
  mode: 'production',

  // Archivo principal de la aplicación.
  entry: ['@babel/polyfill', Path.resolve(__dirname, '../src/index.jsx')],

  // Configuración de salida.
  output: {
    // Carpeta de salida
    path: Path.resolve(__dirname, '../public'),

    // Nombre del archivo compilado.
    filename: 'assets/js/bundle.js',

    publicPath: '/',
  },

  // Resolvemos las extensiones comunes
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
  },

  // Modulos
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

  // Plugin"s
  plugins: [
    // Progress Bar Elegant B=)
    new WebpackBar({
      name: 'Menu Listados - Producción',
    }),

    // Limpia las compilaciones previas
    new CleanWebpackPlugin(),

    // Copiamos los lenguajes
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

    // Define las variables de entorno
    new Webpack.DefinePlugin(envKeys),

    // Genera el index.html
    new HtmlWebpackPlugin({
      // Nombre del archivo de salida.
      filename: 'index.html',

      // Permiso de injección para script
      inject: true,

      // Template
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
          'react-redux',
          'react-datepicker',
          'react-router-dom',
          'react-bootstrap-table-next',
          'react-bootstrap-table2-paginator',
          'react-bootstrap-table2-toolkit',
          'redux',
          'redux-persist',
          'redux-devtools-extension',
          'redux-logger',
          'connected-react-router',
          'moment',
        ],
      },
    }),
  ],

  // Optimizaciones
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
