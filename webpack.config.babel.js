import path from 'path';

export default {

        entry: {
            main: './src/entry.js',             // 主网站入口
            commons: ['react', 'react-dom']
        },

        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                use: ['babel-loader']

            }]

        },
        output: {
            publicPath: '/',
            path: path.join(__dirname, 'out'),
            filename: 'js/[chunkhash].[name].js'
        },
        plugins: []

}