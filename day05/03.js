var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    var data=res.cookie("name","tom",{maxAge:90000,httpOnly:true})
    res.send()
})
app.get("/login",(req,res)=>{
    var data=res.cookie("name")
    console.log
})
app.listen(3000)
/** 
 * 什么是cookie？浏览器端   大小：4k 页面最多出现次数：20
 * maxAge：过期时间 
 * domain 域名
 * path 路径  在该路径下才可以访问当前缓存
 * httpOnly   设置https或http
 * singIed 签名
 * expires  时长
 * 存储空间
 * 用途：
 * 登录 注册
 * 可以储存二级域名或更多
 * 
 * 
 * */