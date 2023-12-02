import express from 'express';
import { User } from './models/User';


const app = express();
const PORT = 3000;
const USERS : Array<User> = [];

app.use(express.json());

app.post('/User', (req, res) => {
    let { username, password } = req.body;
    let user: User = {
        username: username,
        password: password
    };

    USERS.push(user);
    res.status(201).send(user);
});

app.get('/User', (req, res) => {
    res.status(200).send(USERS);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

