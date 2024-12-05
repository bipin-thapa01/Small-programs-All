const fs = require('fs');
const { buffer } = require('stream/consumers');
const { URLSearchParams } = require('url');

let reference = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<form method="POST" action="/calculate">
    <h1>Calculator</h1>
    <input type="text" placeholder="Enter 1st number" name="num1" autocomplete="off">
    <input type="text" placeholder="Enter 2nd number" name="num2" autocomplete="off">
    <button type="submit">+</button>
    </form>`);
    res.end();
  }
  else if(req.url === '/calculate' && req.method === 'POST'){
    const arr = [];
    let s;
    res.setHeader('Content-Type','text/html');
    req.on('data',(chunk) => {
      arr.push(chunk);
    })
    req.on('end',()=>{
      let data = Buffer.concat(arr).toString();
      const params = new URLSearchParams(data);
      const dataObject = Object.fromEntries(params);
      let n1 = parseFloat(dataObject.num1);
      let n2 = parseFloat(dataObject.num2);
      if(!isNaN(n1)&&!isNaN(n2)){
        s = n1 + n2;
        dataObject.sum = s.toString();
      }
      fs.writeFileSync('sum.txt',JSON.stringify(dataObject));
      console.log(s);
      res.write(`
      <p>Sum:${s}</p>
      <a href="/">Go Back</a>`);
      res.end();
    })
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write(`
    <h1>Eror 404</h1>
    <p>Page not Found</p>`);
    res.end();
  }
}
module.exports = reference;