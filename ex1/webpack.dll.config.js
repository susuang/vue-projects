const path = require('path');
const webpack = require('webpack');

const AssetsPlugin = require('assets-webpack-plugin');

module.exports ={
    entry: {
        vendors: ['vue', 'vue-router','vue-resource','vuex']//第三方npm包，一般我们不会进行修改，所以只要打包一次，之后build的时候不需要打包
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.[hash].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname,'dist', '[name]-manifest.json'),
            name: '[name]_library'
        }),
        new AssetsPlugin({//生成js文件对应的记录了版本号的文件
            filename: 'bundle-config.json',
            path: path.join(__dirname, 'dist')
        })
    ]
};