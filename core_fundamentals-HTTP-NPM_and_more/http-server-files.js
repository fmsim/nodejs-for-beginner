const http = require('http'),
      fs = require('fs');

http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === '/') {
    fs.readFile('./global.html', 'UTF-8', (err, data) => {
      res.writeHead(200, {'Contnet-Type': 'text/html'});
      res.end(data);
    });
  } else {
    res.writeHead(404, {'Contnet-Type': 'text/plain'});
    res.end("404 ERROR, could not find your data");
  }
}).listen(3333);
console.log("listening");
