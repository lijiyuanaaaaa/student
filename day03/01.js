var http =require("http")
var fd=require("formidable")
var path=require("path")
var fs=require("fs")
var sd=require("silly-datetime")
http.createServer((req,res)=>{
    if(req.url=="/send"&&req.method=="POST"){
        var form=new fd.IncomingForm()
        form.url="./uploads"
        form.parse(req,function(err,fields,files){
            console.log(files)
            var oldpath=files.pic.path
            var extname=path.extname(files.pic.name)
            var tt=sd.format(new Date(),"YYYYMMDDHHmmss")
            var newpath="./uploads/"+tt+extname
            fs.rename(oldpath,newpath,(err)=>{
                if(err){
                    throw err
                }
                console.log("success");
                res.end()
            })
        })
    }
}).listen(3000)