var http=require("http");
function onrequest(req,res)
{
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("Hello User!!!");
    res.end("The request url is"+req.url);
}
var server=http.createServer(onrequest);
server.listen(2000);
