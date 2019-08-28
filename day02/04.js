var http = require("http")
var fs = require("fs")
http.createServer((req, res) => {

    fs.writeFile("b.txt", "哈哈哈", {
        "flag": "a"
    }(err) => {
        if (err) {
            throw err
        }
    })
    res.end("success")
}).listen(3000)