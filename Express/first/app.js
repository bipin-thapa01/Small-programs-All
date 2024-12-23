const express = require('express');
const app = express();

app.use((req,res,next)=>{
  res.send('<h1>Hello! This is my first express project');
  next();
});

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server successfully startes at https://localhost${port}`);
});