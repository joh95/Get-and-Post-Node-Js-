var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

http.createServer(function(req, res){
   
    if (req.url === "/form") {
        res.writeHead(200, {"content-Type":"text/html"});
        fs.createReadStream("./index.html", "UTF-8").pipe(res);
    }

    if (req.method=== "GET") {
        //Mensaje identificador del GET
        let messageGet = {"Message":"Its a trap"};
        console.log(messageGet);
        
        var value = url.parse(req.url, true).query;
        console.log(value);

    }
    else if(req.method === "POST"){
        //Mensaje identificador del Post
        let messagePost = {"Message":"Pretty Lie"};
        console.log(messagePost);
        
        var data = "";
        req.on("data",function(chunk){
            data += chunk;
        });
        req.on("end",function(chunk){
            var formData = querystring.parse(data);
            console.log(formData );
            
        });
        
    }
}).listen(3000);