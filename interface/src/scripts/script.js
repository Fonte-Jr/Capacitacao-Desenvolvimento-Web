function post(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    let payload = {
        "username" : email,
        "password" : password
    };

    fetch("http://localhost:3000/User/Create", {
        method : "POST",
        body : JSON.stringify(payload),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then( res => {
        if(res.status === 200){
            alert("Usuário Criado!!");
            window.location.href = "index.html"
        }
        else{
            alert(res.statusText);
        }
    });
}

async function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    let payload = {
        "username" : email,
        "password" : password
    };

    let res = await fetch("http://localhost:3000/Login", {
        method : "POST",
        body : JSON.stringify(payload),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });

    if(res.status === 200){
        let resBody = JSON.parse(await res.text());
        window.sessionStorage.setItem("token", resBody.token);
        window.location.href = "dashboard.html";
    }
    else{
        alert(res.statusText);
    }
}

function Verify(){
    let token = window.sessionStorage.getItem("token");

    if(!token){
        alert("Acesso negado!!!");
        window.location.href = "index.html";
    }
}

function Logout(){
    window.sessionStorage.removeItem("token");
    window.location.href = "index.html";
}



