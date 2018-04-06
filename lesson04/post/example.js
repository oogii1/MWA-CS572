const http = require("http"); 
const querystring = require("querystring");

function onRequest(request, response) {
    const { method, url } = request;
    console.log(method);
    if(method === 'POST'){
        let postData = ""; 
        request.setEncoding("utf8"); 
        request.on("data", function(postDataChunk) { 
            postData += postDataChunk;
        }); 
        request.on("end", function() { 
            const myTextAreaValue = querystring.parse(postData).text;
            console.log(myTextAreaValue);
        }); 
    }else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`<form action="/upload" method="post"> 
                        <textarea name="text"></textarea> 
                        <input type="submit" /> 
                    </form>
                `);
    }

	response.end(); 
} 
http.createServer(onRequest).listen(8888); 
console.log("Server has started on port 8888.");
