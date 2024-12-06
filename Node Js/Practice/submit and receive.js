let a = (req,res) =>{
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <h1>Calculator</h1>
      <form method="POST" action="/calculate">
        <input type="text" name="num1" placeholder="Enter 1st number">
        <input type="text" name="num2" placeholder="Enter 2nd number">
        <br>
        <button>
        <a href="/plus" style="text-decoration:none;">+<a></button>
        <button>
        <a href="/minus" style="text-decoration:none;">-<a></button>
        <button>
        <a href="/mul" style="text-decoration:none;">*<a></button>
        <button>
        <a href="/div" style="text-decoration:none;">/<a></button>
      </form>
    `);
    res.end();
  }
  else if(req.url === '/plus' && req.method === 'POST'){
    res.setHeader('Content-Type','text/html');
    
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