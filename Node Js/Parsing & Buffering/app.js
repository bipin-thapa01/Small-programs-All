const http = require('http');
const request = require('./calculator');

const server = http.createServer(request);

const port = 30001;
server.listen(port,()=>{
  console.log(`Server successfully started at http://localhost:${port}`);
});