const http=require('http');
const server=http.createServer(function(req,res){
    res.end("HelloGyus");
})
server.listen(3000);

