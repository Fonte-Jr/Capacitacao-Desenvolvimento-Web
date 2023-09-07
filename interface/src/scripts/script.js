const users = [
    {
        "email": "email@email.com",
        "password": "1234"
    },
    {
        "email": "email0@email.com",
        "password": "1234"
    },
    {
        "email": "email1@email.com",
        "password": "1234"
    }
];

function db(){
    return users;
}

function isUser(email, password){
    let users = db();
    let user = users.find( user =>  user.email === email && user.password === password);
    if(user !== undefined) {
        return true;
    }
    else{
        return false;
    }
}

function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(isUser(email, password)) {
        window.location.href = "dashboard.html"
    }
    else{
        alert("Login ou Senha Incorretos !!");
    }
}



