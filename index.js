//Importing express library for create server
const  express = require("express") //routing,listening => creating Server
//App.use() 
const router = require("./routes/empRoute")

const mongoose = require("mongoose")

const app = express()
app.use('/emp',router)

app.get("/user",(req,res)=>{

    res.send("first Api call")

})
const port = 5000;

app.listen(port,(req,res)=>{

    console.log(`starting the application on port : http://localhost:${port}`)
})
 
const mongodbUrl ="mongodb+srv://prashant9860:prashant9860@cluster0.hc96rgp.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodbUrl)
.then(()=>{
    console.log("Db Connectes!!!!")
})
.catch((err)=>{
    console.log(err);
})