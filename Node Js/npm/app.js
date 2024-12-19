const http = require('http');
const header = require('./header');

const server = http.createServer(header);

const port = 3000;
server.listen(port, ()=>{
  console.log( `Server started at http://localhost:${port}`);
})