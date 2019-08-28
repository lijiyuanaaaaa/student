/** 
 * session
 * npm  install express-session
*/
var express=require("express")
var session=require("express-session")
var app=express()
app.use(session({
    name:"fcht",//session 的名称  默认 为connect_id
    secret:"fcht",//  签名 防止信息被篡改
    resave：false,  //强制保存为session
    cookie:("name","value",{maxAge:90000,httpOnly:true}),
    saveUninitialized:true//初始化
}))
app.get("/set",(req,res)=>{
    req.session.username="tom"
    console.log(req)
    res.send()
})
app.get("/get",(req,res)=>{
    if(req.session.username=="top"){
        res.send("欢迎"+req.session.username+"光顾")
    }
})
app.listen(3000)