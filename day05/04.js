var express=require("express")
var cookie=require("cookie-parser")
// cookie-parser
var app=express()
app.use(cookie())
app.use("/set",(req,res)=>{
res.cookie("username","admin",{maxAge:90000,httpOnly:true})
res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
    var data=req.cookies.username
    console.log(data)
    res.send({"data":"3434"})
})
app.listen(3000)