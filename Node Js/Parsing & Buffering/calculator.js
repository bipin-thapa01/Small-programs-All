const fs = require('fs');

let request = (req,res) =>{
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`<h1>Welcome to HomePage</h1>
        <br><br><br>
        <h3>Click below to go to Calculator</h3>
        <a href="/calculator">Click Me</a>`);
    res.end();
  }
  else if(req.url === '/calculator'){
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.write(`
    <html>
    <body>
    <form method="POST" action="/calculate-result">
    <input type="text" name="number1" placeholder="Enter 1st Number" autocomplete="off">
    <input type="text" name="number2" placeholder="Enter 2nd Number" autocomplete="off">
    <button type="submit">Sum</button>
    </form>
    </body>
    </html>`);
    res.end();
  }
  else if(req.url === '/calculate-result'&&req.method === 'POST'){
    res.setHeader('Content-Type','text/html');
    const body = [];
    let sum=0;
    req.on('data',(chunk) =>{
      body.push(chunk);
      console.log(chunk);
    });
    req.on('end',()=>{
      let content = Buffer.concat(body).toString();
      const params = new URLSearchParams(content);
      const bodyObject = Object.fromEntries(params);
      let num1 = parseFloat(bodyObject.number1);
      let num2 = parseFloat(bodyObject.number2);
      let sum;
      if(!isNaN(num1)&&!isNaN(num2)){
        sum = num1+num2;
        bodyObject.sum = sum;
      }
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
    });
    res.write(`
      <h1>SUM: ${sum}</h1>
      `);
    res.end();
  }
};

module.exports = request;