const fs = require('fs');
let result;
let dataObj = {};
let a = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <h1>Calculator</h1>
      <form method="POST" action="/calculate">
        <input type="text" name="num1" class = "num1" placeholder="Enter 1st number" style="height: 40px;">
        <input type="text" name="num2" class = "num2" placeholder="Enter 2nd number" style="height: 40px;">
        <br>
        <br>
        <div style="display: flex; column-gap: 10px;">
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" type="submit" name="operation" value="sum">+</button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" name="operation" value="diff">-</button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" name="operation" value="mul">*</button>
          <button style="width:40px; height: 40px; font-size: 20px; text-align: center; cursor: pointer;" name="operation" value="div">/</button>
        </div>
      </form>
    `);
    res.end();
  }
  else if (req.url === '/calculate') {
    res.setHeader('Content-Type', 'text/html');
    const inputData = [];
    req.on('data', (chunk) => {
      inputData.push(chunk);
    });
    req.on('end', () => {
      let data = Buffer.concat(inputData).toString();
      let param = new URLSearchParams(data);
      dataObj = Object.fromEntries(param);
      const operation = dataObj.operation;
      switch (operation) {
        case 'sum':
          result = Number(dataObj.num1) + Number(dataObj.num2);
          break;
        case 'diff':
          result = Number(dataObj.num1) - Number(dataObj.num2);
          break;
        case 'mul':
          result = Number(dataObj.num1) * Number(dataObj.num2);
          break;
        case 'div':
          result = Number(dataObj.num2) !== 0 ? result = Number(dataObj.num1) / Number(dataObj.num2) : 'Undifined result';
      }
      dataObj.result = result;
      fs.writeFile('user.txt', JSON.stringify(dataObj), (error) => {
        console.log(`
        Error: ${error}`);
      });
      res.write(`<h1>Result: ${result}</h1>
      `);
      res.end();
    });
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <h1>Error 404</h1>
    <p>Page not Found</p>`);
    res.end();
  }
}

module.exports = a;