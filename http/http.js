'use strict';

var http=require('http');


var server=http.createServer(function(req,res){
    console.log(req.method+':'+req.url+'dadada')
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h2>hello</h2>')
})
server.listen(8080)
console.log('Server is running at http://127.0.0.1:8080/')