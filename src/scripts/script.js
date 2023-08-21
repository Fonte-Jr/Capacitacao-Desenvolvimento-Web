function Login(){
    let email = document.getElementsByName('email').value;
    let password = document.getElementsByName('password').value;

    if(email === "email@email.com" && password === "1234") {
        window.location.href = "dashboard.html";
    }
    else{
        console.log(email,password);
        alert("Login ou Senha Incorretos !!");
    }

}