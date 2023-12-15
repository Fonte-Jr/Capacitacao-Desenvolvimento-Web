import express from 'express';
import { Role } from './models/Role';
import { User } from './models/User';
import { Encrypt } from './utils/Encrypt';


const app = express();
const PORT = 3000;
const USERS : Array<User> = [];
const ROLES : Array<Role> = [];

app.use(express.json());

app.post('/User', async (req, res) => {
    let { username, password, roleId } = req.body;

    if(!username || !password || !roleId) return res.status(400).send({ error: 'Fields needed!'});
    
    let user: User = {
        id: USERS.length > 0 ? USERS[USERS.length -1].id + 1 : 1,
        username: username,
        password: await new Encrypt().getHash(password),
        roleId: roleId
    };

    if(USERS.find( item => item.username === user.username)){
        return res.status(400).send({ error: 'Username already in use!'});
    }

    USERS.push(user);
    return res.status(201).send(user);
});

app.put('/User', (req, res) => {
    let { username, password, roleId } = req.body;

    let user: User | undefined = USERS.find( item => item.username === username);

    if(user){
        let newUser: User = {
            id: user.id,
            username: username,
            password: password,
            roleId: roleId
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

app.post('/Role', (req, res) => {
    let { role } = req.body;

    if(!role) return res.status(400).send({ error: 'Fields needed!'});
    
    let newRole: Role = {
        id: ROLES.length > 0 ? ROLES[ROLES.length -1].id + 1 : 1,
        role: role
    };

    ROLES.push(newRole);
    return res.status(201).send(newRole);
});

app.put('/Role', (req, res) => {
    let { role } = req.body;

    let roleDb: Role | undefined = ROLES.find( item => item.role === role);

    if(roleDb){
        let newRole: Role = {
            id: roleDb.id,
            role: role
        };

        let index = ROLES.findIndex( item => item.role === newRole.role);
        ROLES[index] = newRole;
        return res.sendStatus(204);
    }

    return res.sendStatus(400);
});

app.delete('/Role', (req, res) => {
    let { role } = req.body;

    let roleDb: Role | undefined = ROLES.find( item => item.role === role);

    if(roleDb){
        let index = ROLES.findIndex( item => item.role === role);
        ROLES.splice(index,1);
        return res.sendStatus(204);
    }

    return res.status(400).send('User does not exist!');
});

app.get('/Role', (req, res) => {
    return res.status(200).send(ROLES);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

