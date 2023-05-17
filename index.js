const bodyParser = require("body-parser");
const express = require("express")
const app = express();
let inp;
// let ejs = require('ejs');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    
    const today = new Date();
    
    let option = {
        weekday: "long",
        day:"numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("en-US", option)
    

    
    
    res.render('index', {ajDate:day, newItem: inputs})
    
})

let inputs =[];

app.post("/",(req,res)=>{
 let inp = req.body.newItem
    inputs.push(inp);
 res.redirect('/')


})

app.listen(3000,()=>{
    console.log("Your server is running omn port 3000");
})