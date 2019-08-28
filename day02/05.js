var http =require("http")
var fs=require ("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    // rename  改名
    fs.rename("a.txt","b.txt",(err)=>{
        if(err){
            throw err
        }
        res.end("success")
    })
    // unlink 删除
    // fs.unlink("2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
}).listen(3000)