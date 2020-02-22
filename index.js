const express=require('express');
const path= require('path');
const bodyParser= require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

var Port=3000;

app.get('/',(req,res)=>{
    res.sendFile('/root/Desktop/web_dev/barter_system/public/scripts/landing_page.html')
})

app.get('/evaluateProduct',(req,res)=>{
    
})

app.listen(Port,console.log(`listening on port ${Port}`));