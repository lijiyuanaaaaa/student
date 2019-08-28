var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
/**
 * ejs  模板引擎
 * 定义  嵌入js的模板引擎
 * 特点
 * render 渲染   complie编译  template 模板
 * ejs。render（template,data)template 模板 data 数据
 * index.ejs
 * <% %>编译
 * <%= %>输出
 * <%# %>注释
 *  <%_ %>去除首位空格
 * <% _%>去除末尾空格
 */
http.createServer((req,res)=>{
    // var num =9
    // var str="我想买个iphone<%=num%>s"
    var list=["首页","新闻","关于"]
    fs.readFile("./view/index.ejs",(err,data)=>{
        var template=data.toString()
        var str =ejs.render(template,{list:list})
        res.end(str)
    })
    
}).listen(3000,function(){
    console.log("服务已挂起")
})
