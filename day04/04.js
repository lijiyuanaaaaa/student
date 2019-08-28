/** 
 * express 
 * 基于node.js快速开放极简的开发框架
 * 下载
 * npm install express --save
 * express
 * 1路由路径的风大小写
 * 2获取动态路由参数  parmas =》get
 * 3use 使用
 * 4get  请求方式
 * 5 post 请求方式
 * 6  express 支持链式调用
 * 中间件 ：路由中间件
 * body-parser 处理post请求
 * npm i body-paraser
 * 静态资源  static
 * express.static
 * 
 * 
 * art-tempalte(node)======》express-art-tempalte
 * 前后端分离
 * 前端干自己的事
 * 接口=》
 * 登录 uesrname password cook
 * node里面的全局对象
 * dirname  绝对路径
 * 
*/
var express=require("express")
var bodyParaser=require("body-paraser")
// espress=createAppllicationn
var app=express()
// context 执行上下wen1

// app.use("/",(req,res)=>{
//     res.send({"succsee":"ok"})
app.get("/get",(req,res)=>{
res.send("get")
})
app.get("/second",(req,res)=>{
    res.send("second")

})

app.listen(3000)