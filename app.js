// const http = require('http');
import * as http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
    res.write("<head><title>the slash</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write("</html>");
    return res.end();
  }

  if(url === '/message' && ) {

  }
  console.log(req.url, req.method, req.headers);
  // process.ext();
  
  res.write("<html>");
  res.write("<head><title>the title</title></head>");
  res.write("<body><h1>hello this is node js</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
