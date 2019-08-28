var mongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017"
function ConnectDB(callback){
    mongoClient.connect(url,(err,db)=>{
        // url 连接地址  err   
        var dbName=db.db("adminuser")
        // 创建数据库
        if(err){
            // 如果有错
            callback(err,null)
            // 返回
        }
        callback(err,db,dbName,callback)
        // db   dbName指名称 callback
    })
}
exports.add=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).insert(json,function(err,result){
            if(err){
                callback(err.null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}
exports.find=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        // 因为插入数据里面是一数组形式存在
        dbName.collection(collectionName).find(json).toArray(function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}

exports.del=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).deleteOne(json,function(err,result){
            if(err){
                callback(err.null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}
exports.gai=function(collectionName,json,json1,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).updateMany(json,json1,function(err,result){
            if(err){
                callback(err.null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}