/**
 * 数据库
 * 分类
 * 非关系型数据库
 *  mongodb  sqlserer   sqllite
 * 关系：库=》集合（文档document）=》对象
 * show dbs 查看当前所有数据库
 * show collections  查看选中数据库下面的集合
 * use 数据库名称    使用数据库
 * 增
 * db.集合名.insert([""])插入数组
 * db.集合名.insert([{},{}])多条
 * db.集合名.insertMany([{},{}])
 * db.集合名.insertOne({})插入单条
 * db.集合名.save（{}）保存文档
 * 删
 *  db.集合名.remove（） 删除所有
 * db.集合名.deleteOne() 删除单个数据
 * db.集合名.deleteMany()  删除匹配所有
 * 改
 * db.集合名.update（{}，{$Set:{}})
 * db.集合名.updateOne() 更新一条
 * db.集合名.updateMany（）更新所有
 *。
 * 查
 * db.集合名.find（）  查找所有
 * db.集合名 find({})查找对应的数据
 * db.集合名.find（）
 * db.集合名.find（）
 * limit 截取  skip 跳过  sort排序 1升序 -1降序  count（）数据的总条数
 * and 并且  or 或者  $gt大于  $gte大于等于  $lt小于   $lte小于等于  $ne 不等于
 * bd  查看当前使用的数据库
 * use 数据库名   创建数据库
 * bd。dropDatabase  删除当前使用的数据库
 * 
 * 创建用户 权限
 * db.createUser（{
 *  user：“admin”，
 * pwd："123"
 * rles:[{role:"readAnyDatabase",db:"admin"}]
 * })
 * 权限：read 只读   write 写入 的权限
 * readAnyDatabase
 * userAdminAnyDatabase  管理所有用户的数据
 * readWriteAnyDatabase
 * 
 * 关系型数据库
 * mysql orancle  ==>dba
 * 关系：
 * 库=》表=》对象
 */
var express=require("express")
var app=express()
var dbName=db.db("adminuser")
// 链接 mongodb客户端
app.get("/add",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
        // 创建数据库
        var dbName=db.db("adminuser")
        // 连接集合
        dbName.collection("test").insert({"username":"jack"},function(err){
            if(err){
                throw err
            }
            res.send("插入成功")
            db.close()
        })
    })
    
})
app.get("/del",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
        var dbName=db.db("adminuser")
        dbName.collection("test").deleteOne({"username":"jack"},function(err){
            if(err){
                throw err
            }
            res.send("删除成功")
            db.close()
        })
    })
    
})
// app.get("/upd",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName=db.db("adminuser")
//         dbName.collection("test").updateMany({"username":"jack"},{$Set:{"username":"zzb"}},function(err){
//             if(err){
//                 throw err
//             }
//             res.send("更改成功")
//             db.close()
//         })
//     })
    
// })
app.listen(3000)
