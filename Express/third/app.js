const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/home',(req,res)=>{
  res.send(`
  <h1>Welcome to HomePage</h1>
  <button>
  <a href="/contact-us">Go to contact page</a>
  </button>
  `);
});

app.get('/contact-us',(req,res)=>{
  res.send(`
  <h1>Send your information</h1>
  <form action="/contact-us" method="POST">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" />
  <br>
  <label for="email">Email</label>
  <input type="text" id="email" name="email" />
  <button type="submit">Submit</button>
  `)
});

app.use(bodyParser.urlencoded());

app.post('/contact-us',(req,res)=>{
  res.send(`
  <h1>Thank you for sending your request user ${req.body.name}. We will contact you soon</h1>
  <button> <a href="/home">Go to HomePage</a> </button>
  `);
});

const port = 3000;
app.listen(port,()=>{
  console.log(`Server started at http://localhost:${port}`);
})