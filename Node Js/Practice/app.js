let http = require('http');
let a = require('./submit and receive');

const server = http.createServer(a);

const port = 3000;
server.listen(port,()=>{
  console.log(`Server started at: http://localhost:${port}`);
})