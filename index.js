const http = require('http');

const handleAllrequests = (requestObject, responseObject) => {
    console.log("Hi i have received request")
    
    const url = requestObject.url;
    if (url === "/"){
        responseObject.write("<h1>Welcome to the Homepage</h1>");
    }else if (url==="/login"){
        responseObject.write("<h2>Welcome to login page</h2>");
    }else if (url==="/signup" ){
        responseObject.write("<h3>Welcome to sign up page</h3>");
    }else{
        responseObject.write("<h1>Page not found</h1>")
    }
    responseObject.end();
    
}

const server = http.createServer(handleAllrequests);

server.listen(3000, '127.0.0.1', ()=>{
    console.log("server is ready to receive request");
});

