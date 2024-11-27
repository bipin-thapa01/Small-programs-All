const http = require('http');

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<h>Myntra</h><br><br>
    <form action="/Home" method="POST"><button submit>Home</button></form>
    <form action="/Men" method="POST"><button submit>Men</button></form>
    <form action="/Women" method="POST"><button submit>Women</button></form>
    <form action="/Kids" method="POST"><button submit>Kids</button></form>
    <form action="/Cart" method="POST"><button submit>Cart</button></form>`);
    res.end();
  }
  else if(req.url.toLowerCase()==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome To Home</p>`);
    res.end();
  }
  else if(req.url.toLowerCase()==='/men'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome To Men Section</p>`);
    res.end();
  }
  else if(req.url.toLowerCase()==='/women'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome To Women Section</p>`);
    res.end();
  }
  else if(req.url.toLowerCase()==='/kids'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome To Kids Section</p>`);
    res.end();
  }
  else if(req.url.toLowerCase()==='/cart'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Welcome To Cart Section</p>`);
    res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('404 Request not Found');
    res.end();
  }
});

const port = 3000;
server.listen(port,()=>{
  console.log(`Server successfully opened at: http://localhost:${port}`);
});