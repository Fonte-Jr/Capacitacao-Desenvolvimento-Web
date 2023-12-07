import express from 'express';
import { User } from './models/User';


const app = express();
const PORT = 3000;
const USERS : Array<User> = [];

app.use(express.json());

app.post('/User', (req, res) => {
    let { username, password } = req.body;

    console.log(req.body);
    if(!username || !password) return res.status(400).send({ error: 'Username and Password needed!'});
    
    let user: User = {
        username: username,
        password: password
    };

    if(USERS.find( item => item.username === user.username)){
        return res.status(400).send({ error: 'Username already in use!'});
    }

    USERS.push(user);
    return res.status(201).send(user);
});

app.put('/User', (req, res) => {
    let { username, password } = req.body;

    let user: User | undefined = USERS.find( item => item.username === username);

    if(user){
        let newUser: User = {
            username: username,
            password: password
        };

        let index = USERS.findIndex( item => item.username === newUser.username);
        USERS[index] = newUser;
        return res.sendStatus(204);
    }

    return res.sendStatus(400);
});

app.delete('/User', (req, res) => {
    let { username } = req.body;

    let user: User | undefined = USERS.find( item => item.username === username);

    if(user){
        let index = USERS.findIndex( item => item.username === username);
        USERS.splice(index,1);
        return res.sendStatus(204);
    }

    return res.status(400).send('User does not exist!');
});

app.get('/User', (req, res) => {
    return res.status(200).send(USERS);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

