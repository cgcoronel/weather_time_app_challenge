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
  // Observa los cambios del webpack.
  watch: true,

  // Mapa del codigo
  devtool: 'cheap-module-eval-source-map',

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
    extensions: ['.js', '.jsx', '.scss', '.css', '.json'],
  },

  // Modulos
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

  // Recarga en vivo.
  devServer: {
    // Observa las modificaciones de la carpeta public.
    watchContentBase: false,

    // Contenido servido.
    contentBase: Path.join(__dirname, '../public'),

    // Archivo de entrada para el servidor.
    index: 'index.html',

    // Puerto
    port: 3000,

    // Https
    https: false,

    // Recarga en vivo.
    hot: true,

    // Fallback del api de history
    historyApiFallback: true,

    // Esta propiedad activa la apertura de
    // el navegador al estar compilando.
    open: true,

    // Redirección de las rutas.
    proxy: {
      '/gateway': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: 'true',
        pathRewrite: { '^/gateway': '/gateway' },
        logLevel: 'debug',
      },
    },
  },

  // Plugin"s
  plugins: [
    // Progress Bar Elegant B=)
    new WebpackBar({
      name: 'Menu Listados - Desarrollo',
    }),

    new Webpack.DefinePlugin(envKeys),

    // Verifica si hay versiones duplicadas.
    new DuplicatePackageCheckerPlugin(),

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

    // Actualización en vivo.
    new Webpack.HotModuleReplacementPlugin(),
  ],
}
