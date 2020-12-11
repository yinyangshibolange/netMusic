const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'sass',
            patterns: [
                path.resolve(__dirname, './src/style/*.sass')      //你的.scss文件所在目录
            ]
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('pages', resolve('src/pages'))
    },
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true,
        historyApiFallback: true,
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:3000',
        //         changeOrigin: true
        //     }
        // }
    }
}