const express = require("express");  
const multer = require('multer');  

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
  
app.get('/',(req,res)=>{  
      res.render("file");  
});  
  
app.post('/upload',(req,res)=>{  
    upload(req,res,(err)=>{  
        if(err) return res.end("Error uploading file.");  
        else res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(2000,function(){  
    console.log("Server is running on port 2000");  
});  