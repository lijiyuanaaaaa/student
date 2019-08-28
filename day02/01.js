var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html;charset=utf8"
    })
    if (req.url == "/favicon.ico") {
        return
    }
    var obj = url.parse(req.url, true).query;
    console.log(obj)
    res.end("接收前端传输过的用户名为：" + obj.username)
}).listen(3000)