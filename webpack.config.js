var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var host = 'localhost';
var port = '9000';

var config = {
    entry: './example-es6/src',
    devtool: 'source-map',
    output: {
        path: __dirname + '/example-es6/build',
        filename: 'app.js',
        publicPath: __dirname + '/example-es6'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx']
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src")]
    }
};

new WebpackDevServer(webpack(config), {
    contentBase: './example-es6',
    hot: true,
    debug: true
}).listen(port, host, function (err, result) {
    if (err) {
        console.log(err);
    }
});
console.log('-------------------------');
console.log('Local web server runs at http://' + host + ':' + port);
console.log('-------------------------');

module.exports = config;
