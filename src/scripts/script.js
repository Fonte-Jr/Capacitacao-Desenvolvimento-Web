function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "email@email.com" && password == "1234") {
        window.location.href = "dashboard.html"
    }
    else{
        console.log(email,password);
        alert("Login ou Senha Incorretos !!");
    }

}