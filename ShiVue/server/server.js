var express = require('express')
const path = require('path')
var app = express()
const port = process.env.PORT || 8091

// 设置浏览器可以直接访问的静态文件目录，例如localhost:9000/index.html
app.use(express.static('public'))

// 通配路由，返回生产环境index.html，然后由前端代码处理交互以及路由跳转等
app.get('*', function (request, response){
    response.sendFile(path.resolve('public/index.html'))
})

// 接受前端login请求，返回数据
app.post('/login', function (req, res) {
    //此处可以通过request模块向java后端请求api，获取数据后推送给view层，从而达到分发请求的目的
    res.send('POST request to the homepage')
})

// 监听服务https://github.com/simplefeel/react-node-learn/blob/master/webpack.dev.config.js
app.listen(port, function () {
    console.log('Example app listening on port 8091!')
})