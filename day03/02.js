
var path = require("path")
// console.log(path)
// path 提供一些工具函数，主要处理文件和目录
// extname 获取后缀名
// basename  返回一个真实路径的最后一段
// normalize 规范路径的输出
// isAbsolute  判断是否是绝对路径  true false
// join   拼接完整的路径
// dirname    返回当前文件所在的路径
//  format 把对象转换为字符串  路径读取时会读取dir 和base
// pares 就是把字符串转换为对象读取，除了format里三个还有
// resolve 从又向左依次简析，
// var obj =path.dirname("12/dl.html")
//     console.log(obj)
// var obj =path.format({
//     root:"/aaa",  //root 根
//     dir:"/b/c",//目录
//     base:"1.txt"//文件路径
// })
// var obj=path.parse("12/dl/das")
// console.log(obj)
var obj=path.resolve("12/dl/das")
 console.log(obj)
