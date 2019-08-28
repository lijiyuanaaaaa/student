var express=require("express")
var bodyParaser=require("body-parser")
var app=express()
app.get("/",(req,res)=>{
    res.send("首页")

})
app.get("/list",(req,res)=>{
    console.log(req.query)
    res.send("首页"+req.query.username)

})
app.post("/dopost",(req,res)=>{
    console.log(req.body)
    res.send("dopost"+req.query.username)
})
app.listen(3000)