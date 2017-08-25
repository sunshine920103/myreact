import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default {

        entry: {
            main: './src/entry.js',             // 主网站入口
            commons: ['react','react-dom']
        },

        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']

            }]

        },
        output: {
            publicPath: '/myreact/out/',
            path: path.join(__dirname, 'out'),
            filename: 'js/[chunkhash].[name].js'
        },
        plugins: [
            // 主页面入口index.html
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                chunks: ['commons', 'main']
            })
        ]

}