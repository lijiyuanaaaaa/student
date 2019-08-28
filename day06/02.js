var express = require("express")
var app=express()
var db=require("./db.js")
var url=require("url")

app.get("/add", (req, res) => {
    var obj = url.parse(req.url, true).query;
   db.add("test",{"username":obj.username},(err,data)=>{
    
    if(err){
        throw err
    }
    res.send(data)
   
   })
    
})
app.get("/del", (req, res) => {
    db.del("test",{"username":"zzz"},(err,data)=>{
     if(err){
         throw err
     }
     res.send(data)
    
    })
     
 })
 app.get("/find", (req, res) => {
    db.find("test",{"username":"zzz"},(err,data)=>{
     if(err){
         throw err
     }
     res.send(data)
    
    })
     
 })

 app.get("/gai", (req, res) => {
    db.gai("test",{"username":"zzz"},{$set:{"username":"123"}},(err,data)=>{
     if(err){
         throw err
     }
     res.send(data)
    
    })
     
 })
app.listen(3000)
