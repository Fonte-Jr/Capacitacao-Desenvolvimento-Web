const express = require('express');
const app = express();
const port = 3000;

const db = require('./db.json');

app.use(express.json());

app.post('/Login', (req, res) => {

    try{
        let username = req.body.username;
        let password = req.body.password;
        let user = db.Users.find( user => user.username === username && user.password === password);
        if(user){
            res.send("TokenDeAutenticacaoJwt");
        }
        else{
            res.sendStatus(401);
        }
    }
    catch(e){
        res.sendStatus(400);
    }
    
    
});

app.post('/User/Create', (req, res) => {

    try{
        let username = req.body.username;
        let password = req.body.password;

        let payload = {
            "username" : username,
            "password" : password
        }

        db.Users.push(payload);

        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(400);
    }
    
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})