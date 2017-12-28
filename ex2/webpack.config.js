const path = require('path');
const webpack = require('webpack'); 

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const Merge = require('webpack-merge');

/**
 * Detect how npm is run and branch based on that
 * 根据npm运行来判断处于的状态
 */
const currentTarget = process.env.npm_lifecycle_event;
let debug,          // is debug
    devServer,      // is hrm mode
    minimize;       // is minimize

if (currentTarget == "build") { // online mode （线上模式）
    debug = false, devServer = false, minimize = true;

} else if (currentTarget == "dev") { // dev mode （开发模式）
    debug = true, devServer = false, minimize = false;

} else if (currentTarget == "dev-hrm") { // dev HRM mode （热更新模式）
    debug = true, devServer = true, minimize = false;
}

/**
 * address
 * 目录
 */
const PATHS = {

    publicPath: devServer ? '/ex1/dist/' : './',//publish path

    libsPath: path.resolve(process.cwd(), './libs'),//public resource path:libs

    srcPath: path.resolve(process.cwd(), 'src'),//resource path:src 目录

    node_modulesPath: path.resolve('./node_modules')//node_modules path
};

/*
 * The entry point for the bundle.
 * （入口）
 * */
const entry = {
    index: './src/js/index.js'
};

/*
 * The output point for the bundle.
 * （入口）
 * */
const output = {
    path: path.join(__dirname, 'dist'),

    publicPath: PATHS.publicPath,//（发布后，资源的引用目录）

    filename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',//文件名称）

    chunkFilename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'//按需加载模块时输出的文件名称）
};

/*
 * The loaders.
 * （加载器）
 * */
const loaders = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
        }
    }
];

/*
 * The plugins.
 * （加载器）
 * */
var plugins = [

    /**
     * global flag
     * 全局标识符
     */
    new webpack.DefinePlugin({
        __DEV__: debug,//（开发标识）

        /*
         * proxy flag
         * （代理的标识）
         * */
        __DEVAPI__: devServer ? "/devApi/" : "''"//代理的标识）
    }),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/src/index.html',
        inject: 'true',

        chunks: ['index'],// 需要依赖的模块

        chunksSortMode: 'dependency'// 根据依赖自动排序
    }),
    

];

var config = {
    
    entry: entry,//入口文件配置
    
    output: output,//出口文件配置

    module: {
        rules: loaders//加载器
    },

    plugins: plugins,

};

if(devServer){
    config = Merge(
        config,
        {
            plugins: [
                // 实现刷新浏览器必写
                new webpack.HotModuleReplacementPlugin(),

                new OpenBrowserPlugin({
                    url: 'http://localhost:8080' + PATHS.publicPath + 'index.html'
                })
            ],
            devServer: {
                historyApiFallback: true,
                hot: true,
                inline: true,
                port: "8080"  // Defaults to 8080   process.env.PORT
            }
        }
    );
}

module.exports = config;