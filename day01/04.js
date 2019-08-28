var http=require("http")
var fs=require("fs")//file system 文件系统 作用：操作文本

http.createServer(function(req,res){
//响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url=="/"){
        res.end("首页")
    }else if(req.url=="/red"){
        // readfile  读文件
        fs.readFile("red.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/green"){
        fs.readFile("green.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/green.css"){
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("green.css",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/a.jpg"){
        res.writeHead(200,{"Content-type":"image/jpg"})
        fs.readFile("a.jpg",function(err,data){
            res.end(data)
        })
    }
}).listen(3000,function(){
    console.log("listen挂起")
})