var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readdir("./album",(err,data)=>{
        for(let i=0;i<data.length;i++){
            fs.stat("./album/"+data[i],(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(data[i])
                }
            })
        }
        res.end()
    })
}).listen(3000)