const fs = require('fs');

let header = (req,res) =>{
  const arr = [];
  req.on('data',(chunk)=>{
    arr.push(chunk);
  });
  req.on('end',()=>{
    let buffer = Buffer.concat(arr).toString();
    let params = new URLSearchParams(buffer);
    let dataObj = Object.fromEntries(params);
    fs.writeFile('data.txt', JSON.stringify(dataObj), (e)=>{
      console.log(e);
    })
  });
  res.setHeader('Content-Type','text/html');
  res.write(`<h1>Hello!</h1>
  <form method="POST" action="/">
    <input type="text" name="text"/>
    <button type="submit">Submit</button>
  </form>`);
  res.end();
}

module.exports = header;