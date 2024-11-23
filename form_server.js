const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>  {
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <p>Submit Your Details:</p><br>
        <form action="/submit" method="POST">
          <input type="text" name="name" placeholder="Enter your name"><br>
          <input type="radio" name="gender" value="male"><br>
          <input type="radio" name="gender" value="female"><br>
          <input type="submit" name="submit">
        </form>
      </body>
    `);
    return res.end();
  }
  else if(req.url === '/submit' && req.method == 'POST'){
    fs.writeFileSync('user.txt','Bipin Thapa')
    res.statusCode = 302;
    res.setHeader('location','/submitted');
    return res.end();
  }
  else if(req.url === '/submitted'){
    res.setHeader('Content-Type','text/html');
    res.write(`<p>Form Submitted</p>`);
    return res.end();
  }
  else{
    res.statusCode = 404;
    res.end();
  }
});

const port = 3001;
server.listen(port,()=>{
  console.log(`Server successfully opened at http://localhost/${port}`);
});