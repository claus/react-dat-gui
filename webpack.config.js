/*global __dirname, require, module*/

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let libraryName = 'react-dat-gui';

let plugins = [
  new ExtractTextPlugin({
    // define where to save the file
    filename: `${libraryName}.css`,
    allChunks: true,
  }),
];

const config = {
  entry: {
    'react-dat-gui.js': __dirname + '/src/index.js',
    'react-dat-gui.css': __dirname + '/src/style/dat.scss',
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: '[name]',
    library: 'Dat',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /(\.jsx|\.js)$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      {
        // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.json', '.js', '.scss']
  },
  plugins: plugins,
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    },
    'classnames': {
      'commonjs': 'classnames',
      'commonjs2': 'classnames',
      'amd': 'classnames',
      'root': 'classNames'
    },
    'prop-types': {
      'commonjs': 'prop-types',
      'commonjs2': 'prop-types',
      'amd': 'prop-types',
      'root': 'PropTypes'
    }
  },
};

module.exports = config;
