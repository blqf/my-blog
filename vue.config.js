module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://test.my-site.com'
            }
        }
    },
    configureWebpack: require('./webpack.config'),
}
