var http=require("http");
http.createServer(function(req,res){
    // 解决中文乱码
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.end("我爱中国");
}).listen(3000)
// 。listen 监听端口