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
 * output options tell Webpack how to write the compiled files to disk
 * （webpack 编译后输出标识）
 * */
const output = {
    
    path: path.join(__dirname, 'dist'),

    publicPath: PATHS.publicPath,//（发布后，资源的引用目录）

    filename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',//文件名称）

    chunkFilename: devServer ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js'//按需加载模块时输出的文件名称）
};

let loaders = [
    {}
];

let plugins = [
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

    /*
     * Using this config the vendor chunk should not be changing its hash unless you change its code or dependencies
     * （避免在文件不改变的情况下hash值不变化）
     * */
    new webpack.optimize.OccurrenceOrderPlugin(),

    /*
     * clean publishing directory
     * （发布前清空发布目录）
     * */
    new CleanWebpackPlugin(['dist'], {
        root: '', // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        dry: false // Do not delete anything, good for testing.
    }),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/src/index.html',
        /*
         * inject: true | 'head' | 'body' | false Inject all assets into the given template or templateContent -
         * When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
         * 'head' will place the scripts in the head element.
         * */
        inject: 'true',

        // 需要依赖的模块
        chunks: ['index'],

        // 根据依赖自动排序
        chunksSortMode: 'dependency'
    }),
];

var config = {
    entry: entry,
    output: output,
    module: {
        rules: loaders
    },
    plugins: plugins
}

/*
 *  Hrm setting
 * （开启热更新，并自动打开浏览器）
 * */
if (devServer) {

    config = Merge(
        config,
        {
            plugins: [
                // Enable multi-pass compilation for enhanced performance
                // in larger projects. Good default.
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                }),
                new OpenBrowserPlugin({url: 'http://localhost:8080' + PATHS.publicPath + 'index.html'})
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