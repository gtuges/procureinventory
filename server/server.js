
const express = require('express')
const app = express();
const PORT = 5001



app.get("/",(req,res) => {
    res.send("<h1>Hello world</h1>");
    console.log("get send !")
})



app.listen(PORT,()=>{
    console.log(`Server running on PORT : ${PORT}`)
});



