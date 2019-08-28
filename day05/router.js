// 接口编写文件
var express=require("express")
var router=express.Router()
router.get("/login",(req,res)=>{
res.send({"success":"ok","data":20})
})
module.exports=router