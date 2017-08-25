import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config.base';


const env = process.env;
const HOST = env.HOST || env.npm_package_config_host;
const PORT = env.POST || env.npm_package_config_port;


export default webpackMerge(baseConfig, {
    devtool: 'source-map',
    module: {
        // rules: [{
        // /**
        //  * eslint代码规范校验
        //  */
        //     test: /\.(js|jsx)$/,
        //     enforce: 'pre',
        //     include: path.join(__dirname, 'src'),
        //     use: [{
        //         loader: 'eslint-loader',
        //         options: {
        //             configFile: '.eslintrc.prod.json'
        //         }
        //     }]
        // }]
    },
    plugins: [
        new webpack.DefinePlugin({               // 配置全局变量
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new webpack.optimize.UglifyJsPlugin({    // 压缩混淆js文件
            sourceMap: true
        })
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        inline: true,
        // historyApiFallback: {
        //     rewrites: [{
        //         from: /^\/map/, to: '/dynamicMap.html'
        //     }]
        // },
        contentBase: path.join(__dirname, 'out')
    }
});
