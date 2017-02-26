var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var path = require('path');
// var ejs = require('ejs');
var fs = require('fs');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      { test: /\.jsx?/, include : APP_DIR, loader : 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ]
  },
    postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],

  resolve: {
    modulesDirectories: ['node_modules', './src/components']
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ]
};

module.exports = config;

// module.exports = {
//   entry: './src/index.js',

//   output: {
//     filename: 'index.js',
//     path: path.resolve('./dist'),
//     libraryTarget: 'umd'
//   },

//   module: {
//     loaders: [
//       // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
//       { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
//     ]
//   },

//   postcss: [
//     require('autoprefixer-core'),
//     require('postcss-color-rebeccapurple')
//   ],

//   resolve: {
//     modulesDirectories: ['node_modules', 'components']
//   },

//   plugins: [
//     new ExtractTextPlugin('style.css', { allChunks: true }),
//     // new ReactToHtmlPlugin('index.html', 'index.js', {
//     //   static: true,
//     //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
//     // })
//   ]
// };
