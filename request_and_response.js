const http = require('http');

const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.header);
  res.setHeader('Content-Type','text/html');
  res.write(`<html>
  <head>
    <title> My first Server Response </title>
  </head>
  <body>
    <h1>
      Server Response
    </h1>
    <button onclick=hi()>Click Me</button>
    <script>
      function hi(){
        alert('Hi! This is my first response');
      }
    </script>
  </body>
  </html>`);
  res.end();
});

const port = 3000;
server.listen(port,() => {
  console.log(`http://localhost:${port}`);
});