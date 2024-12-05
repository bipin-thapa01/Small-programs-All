const http = require('http');
const reference= require('./calculator');

const server = http.createServer(reference);

const port = 3000;
server.listen(port,()=>{
  console.log(`Server started at http://localhost:${port}`);
})