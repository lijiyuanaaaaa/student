/**
 * art-template 模板引擎
 * 定义： javascript 的轻量型模板引擎
 * 特点
 *  
 * 语法
 * {{}}
 * 
 * 下载
 *  npm install art-template --save
 */
var http=require("http")
var art=require("art-template")
var fs =require("fs")
http.createServer((req,res)=>{
    var list=["首页","新闻","关于"]
    fs.readFile("./view/list.art",(err,data)=>{
        var template=data.toString()
        var str =art.render(template,{list:list})
        res.end(str)
    })
}).listen(3000,function(){
    console.log("挂起")
})