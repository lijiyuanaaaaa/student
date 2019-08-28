var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    //mkdir  创建文件夹
    // fs.mkdir("aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    // })
    // res.end("success")

    //rmdir  删除文件夹
    // fs.rmdir("aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    // })
    // res.end("success")

    //读取文件夹  readdir
    // fs.readdir("aa",(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end(data.toString())
    // })
    
    //判断是否是文件夹 exists
    // fs.exists("aa",(exists)=>{
    //     if(exists){
    //         console.log("存在")
    //     }else{
    //         fs.mkdir("aa",(err)=>{
    //             res.end("success")
    //         })
    //     }
    // })

    //stat  判断文件夹还是文件
    fs.stat("aa",(err,stats)=>{
        console.log(stats.isDirectory())
        // console.log(stats.isFile())
        res.end("success")
    })
}).listen(3000)
