let result;
let dataObj = {};

function add(){
  let num1 = Number(document.querySelector('.num1').value);
  let num2 = Number(document.querySelector('.num2').value);
  result = num1 + num2;
}

function sub(){
  let num1 = Number(document.querySelector('.num1').value);
  let num2 = Number(document.querySelector('.num2').value);
  result = num1 - num2;
}

function mul(){
  let num1 = Number(document.querySelector('.num1').value);
  let num2 = Number(document.querySelector('.num2').value);
  result = num1 * num2;
}

function div(){
  let num1 = Number(document.querySelector('.num1').value);
  let num2 = Number(document.querySelector('.num2').value);
  result = num1 / num2;
}

let a = (req,res) =>{
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <h1>Calculator</h1>
      <form method="POST" action="/calculate">
        <input type="text" name="num1" class = "num1" placeholder="Enter 1st number" style="height: 40px;">
        <input type="text" name="num2" class = "num2" placeholder="Enter 2nd number" style="height: 40px;">
        <br>
        <br>
        <div style="display: flex; column-gap: 10px;">
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" onclick="add()"><a href="/result" style="text-decoration:none;">+</a></button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" onclick="sub()"><a href="/result" style="text-decoration:none;">-</a></button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" onclick="mul()"><a href="/result" style="text-decoration:none;">*</a></button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" onclick="div()"><a href="/result" style="text-decoration:none;">/</a></button>
        </div>
      </form>
    `);
    res.end();
  }
  else if(req.url === '/result'){
    res.setHeader('Content-Type','text/html');
    const inputData = [];
    req.on('data',(chunk)=>{
      inputData.push(chunk);
    });
    req.on('end',()=>{
      let data = Buffer.concat(inputData).toString();
      let param = new URLSearchParams(data);
      dataObj = Object.fromEntries(param);
      dataObj.result = result;
      res.write(`<h1>Result: ${result}</h1>
      `);
      res.end();
    });
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write(`
    <h1>Error 404</h1>
    <p>Page not Found</p>`);
    res.end();
  }
}

module.exports = a;