/** 
 * 
 * 
 * 
 */
var express=require("express")
var app=express()
var db=require("../day06/db")
var router=express.Router()
// 处理post请求
var bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
// 注册接口
router.post("/register",(req,res)=>{

    var regUser={
        username:req.body.username,
        password:req.body.password,
        createAT:new Date(),
        updateAt:new Date(),
        phone:req.body.phone,
        email:req.body.email,
        tokenID:1

    }
    db.add("userData",regUser,(err,result)=>{
        if(err){
            throw err
        }
        res.send("register success")
    })
})
// 登录接口
router.get("/login",(req,res)=>{
    // 接收传过来的值
    var userDate={
        username:req.query.username,
        password:req.query.password
    }
    // 进行数据库检索
    //先把数据库里所有数据取出
    db.find("userData",{},(err,data)=>{
        db.find("userData",userDate,(err,result)=>{
            if(result==" "){
                if(data[0].username!=req.query.username){
                    res.send({"error":"用户名或密码错误"})
                }else{
                    res.send({"error":"无此用户"})
                }
               
            } else {
                res.send({"error":"登录成功"})
            }
        })
    })
    
})
app.listen(3000)
/** 
 * 跨域处理
 * 1代理  node-http-proxy
 * 2jsonp  get
 * 3设置请求头
 * 4 cors  
 * 
 * 
 * 
 * git => github   码云(git,svn)
分布式管理系统
三端：本地区 暂存区 远端区

git init             项目初始化
git status           查看文件状态
git add<file>        添加单个文件
git add<file> <file> 添加多个文件
git add.             添加所有文件
git commit -m        提交到缓存区
git config --global user.name "用户名" (第一次用到)
git config --global user.email "邮箱"  (第一次用到)
git remote add origin 地址       链接到远程仓库 (第一次用到)
git push -u origin master       第一次提交 (第一次用到)



svn
集成式管理系统
两端： 本地  远端
commit：提交  本地=>远端
update：更新  远端=>本地
缺点：没有暂存区

 * 
 * 
*/