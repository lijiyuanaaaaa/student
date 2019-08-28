var http = require("http");
http.createServer(function (req, res) {
    res.end("success");
}).listen(3000)