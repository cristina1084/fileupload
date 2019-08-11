const express = require("express");  
const multer = require('multer');  
const path = require('path')
const app = express();  

app.set("view engine","ejs");  
app.set("views","views");  

var storage =   multer.diskStorage({  
  destination: (req, file, callback)=>{  
    callback(null, './public/images');  
  },  
  filename: (req, file, callback)=>{  
    callback(null, file.originalname);  
  }  
});  

var upload = multer({ storage : storage}).single('myfile');  

app.use(express.static(path.join(__dirname+"/public")));

app.get('/',(req,res)=>{  
      res.render("file");  
});  
  
app.post('/', upload, (req,res)=>{  
  res.status(204).send()  
});  

app.get('/:id',(req, res) => {
  var file = req.params.id;
  var fileLocation = path.join('./public/images',file);
  console.log(fileLocation);
  res.download(fileLocation, file); 
});


app.listen(2000,function(){  
    console.log("Server is running on port 2000");  
});  