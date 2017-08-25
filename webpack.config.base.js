import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractAntD = new ExtractTextPlugin('css/[contenthash].antd.css');


export default {
        entry: {
            main: './src/index.jsx',             // 主网站入口
            commons: ['react','react-dom']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.join(__dirname, 'src'),
                    use: ['babel-loader']
                },
                {
                    /**
                     * antd组件的css,scss抽离为独立文件antd.css
                     */
                    test: /\.css$/,
                    include: [
                        path.join(__dirname, 'node_modules/antd/lib'),
                        path.join(__dirname, 'node_modules/_antd@2.12.7@antd/lib/')
                    ],
                    use: extractAntD.extract(['css-loader'])
                }
            ]
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
            }),
            extractAntD
        ]

}