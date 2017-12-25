const path = require('path');
const webpack = require('webpack');
const bundleConfig = require(path.resolve(__dirname, 'dist/bundle-config.json'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件配置
    entry: {
        index: path.resolve(__dirname, 'src/js/page/index.js'),
    },
    //出口文件配置
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '/dist/',                //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name]-[hash].js',            //每个页面对应的主js的生成配置
        chunkFilename: 'js/[name].asyncChunk.js?'+new Date().getTime() //chunk生成的配置
    },
    module: {
        //加载器
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'src/js/page/index.html'),//生成html的名字
            template: 'modal.html',
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true
            },
            files: {
                "js": [bundleConfig.vendors.js]
            }
        }),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.resolve(__dirname, 'dist/vendors-manifest.json'))
        })
    ]
};