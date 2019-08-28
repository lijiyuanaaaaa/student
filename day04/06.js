//ejs  art-template
var express=require("express")
var app=express()
// ejs 模板引擎
// set设置   engine 引擎
// 如何设置模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.send("index")
})
app.listen(3000)