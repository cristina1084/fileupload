const express = require('express');
//const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(express.static(path.join(__dirname, 'public')));


app.listen(8080,()=>{
  console.log("Listening");
})

