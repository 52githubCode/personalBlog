// vue-cli的配置文件

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true
// })

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    publicPath: './',
    // 跨域配置
    devServer: {
        proxy: {
            '/api': {
                target: "http://test.my-site.com",
            },
        },
    },
}