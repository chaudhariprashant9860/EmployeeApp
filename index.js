//Importing express library for create server
const  express = require("express") 

const app = express()

app.get("/user",(req,res)=>{

    res.send("first Api call")

})
const port = 5000;

app.listen(port,(req,res)=>{

    console.log(`starting the application on port : http://localhost:${port}`)
})