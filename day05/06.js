var express=require("express")
var app=express()
// 设置运行跨域fangw
app.all("*",(req,res,next)=>{
    // 允许所有域名访问
    res.header("Access-Control-Allow-origin","*")
    // 定义请求头类型
    res.header("Access-Control-Allow-Content","content-type")
    // 定义运行跨域访问的请求方式
    res.header("Access-Control-Allow-Method","GET","POST","PUT","PATCH","DELETE","OPTIONS")
    // 继续执行
    next()
})
app.listen(3000)
// mongo
// mongod --dbpath=d:/123/data