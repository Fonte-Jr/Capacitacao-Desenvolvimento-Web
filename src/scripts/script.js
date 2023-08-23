function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(isUser(email, password)) {
        window.location.href = "dashboard.html"
    }
    else{
        alert("Login ou senha inválido!");
    }
}

function isUser(email, password){
    let users = db();
    let user = users.find(user => user.email === email && user.password === password);
    if(user !== undefined) {
        return true;
    }
    else{
        return false;
    }
}

function db(){
    return users;
}

const users = [
    {
        "email": "renan@fontejr.com.br",
        "password": "123456"
    },
    {
        "email": "henrique@fontejr.com.br",
        "password": "7891011"
    }
];









