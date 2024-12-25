const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', (req,res,next)=>{
  console.log(req.url);
  next();
});

app.use('/', (req,res,next)=>{
  console.log(req.method);
  next();
});

app.use('/home', (req,res,next)=>{
  res.send(`<h1>This is homepage</h1>
  <button>
  <a href="/contact-us">Go to contact us</a>
  </button>`);
});

app.get('/contact-us', (req,res,next)=>{
  res.send(`<form method="POST" action="/result">
  <label for="number">Your Number:</label>
  <input id="number" name="number" type="text"></input>
  <label for="info">Details</label>
  <textarea id="info" name="info"></textarea>
  <button type="submit">Submit</button>`);
});

app.post('/result', (req,res)=>{
  const {number, info} =req.body;
  res.send(`
  <h1>Your request is submitted!</h1>
  <p>Number: ${number}</p>
  <p>Details: ${info}</p>
  <button>
    <a href="/home">Go to Homepage</a>
  </button>`);
});

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server successfully started at https://localhost:${port}`)
})