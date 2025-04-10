
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5001

app.use(express.json());



app.get("/",(req,res) => {
    res.send("<h1>Hello world</h1>");
    console.log("get send !")
})

app.post('/login',()=> {
    // authentication
    const username = req.body.username;
    const user = { name : username }

    const accessToken = jwt.use(user, process.env.ACCESS_TOJEN_SECRET);
    res.json ( { accessToken : accessToken })
    // https://youtu.be/mbsmsi7l3r4?t=540

})

app.listen(PORT,()=>{
    console.log(`Server running on PORT : ${PORT}`)
});



