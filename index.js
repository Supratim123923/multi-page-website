const express = require('express');
const fs = require('fs');
//const { homedir } = require('os');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'public')))
app.set("view engine","hbs");
app.set("views", path.join(__dirname, 'views'));
//Middle ware

app.get("",(req,res)=>{
  res.render("index.hbs");
  
})
app.get("/contact",(req,res)=>{
  res.render("contact");
})

app.get("/about",(req,res)=>{
  res.render("about");
})

app.get("/plan",(req,res)=>{
  res.render("plan");
})



app.listen(4000);