
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5001
require('dotenv').config();

app.use(express.json());



app.get("/",(req,res) => {
    res.send("<h1>Hello world</h1>");
    console.log("get send !")
})

app.post('/login',authenticateToken,(req,res)=> {
    // authentication
    // left off from here https://youtu.be/mbsmsi7l3r4?t=827
    const username = req.body.username;
    const user = { name : username }

    const accessToken = jwt.sign(user, process.env.ACCSS_TOKEN_SECRET);
    res.json ( { accessToken : accessToken })


})

function authenticateToken(req, res, next) {

    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null ) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCSS_TOKEN_SECRET,(err,user) => {
            if(err) return res.sendStatus(403)
            req.user = user    
            next();
        })

}

app.listen(PORT,()=>{
    console.log(`Server running on PORT : ${PORT}`)
});



