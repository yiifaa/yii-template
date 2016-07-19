var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  plugins: [
/*    new webpack.ProvidePlugin({
      d3: "jquery",
      $: "jquery"
    }),*/

  /**
    new webpack.optimize.CommonsChunkPlugin({
      name       : "vendor",
      filename  : "vendor.js",
      minChunks : Infinity
    })
   **/
  ],

  entry: {
    /**
     * 在需要打包组件系统时，将此处改为./src/main.js
     */
    //app: './src/main.js'
    //vendor: ["jquery"],
    app: './docs/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  /**
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
  },
**/
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    /**
     * 别名
     */
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
	  "bootstrap.css" : projectRoot + '/node_modules/bootstrap/dist/css/bootstrap.css',
      //"jquery"         : projectRoot + '/node_modules/jquery/dist/jquery.js',
      //"d3":  projectRoot + '/node_modules/d3/build/d3.js',
      "syntaxhighlighter.js" : projectRoot + '/docs/libs/syntaxhighlighter.js',
      "syntaxhighlighter.css" : projectRoot + '/docs/libs/syntaxhighlighter.css',
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
	/** **/
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /docs/]
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: [/node_modules/, /docs/]
      }
    ],

    loaders: [
      /*导入全局jQuery*/
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
