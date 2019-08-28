var http=require("http")
var url=require("url")
console.log(url.parse("127.0.0.1"))
// resolvc 转为字符串 第二个参数的路由回替换当前路径的第一路由
var obj=url.resolve("http://127.0.0.1:3000/a/c","/src");
//var obj=url.formate("http://127.0.0.1:3000/a/c","/b")
var obj=url.format({
    protocol: null,
    slashes: null,
    auth: null,
    host: "http://127.0.0.1:3000",
    port:"3000",
    hostname: "http://127.0.0.1",
    hash: null,
    search: null,
    query: null,
    pathname: null,
    path: null,
    href: '127.0.0.1:3000'
})
console.log(obj)