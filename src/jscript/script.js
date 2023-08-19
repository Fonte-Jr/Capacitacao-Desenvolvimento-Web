function login() {
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == "fefe@gmail.com" && senha == "fefe2023"){
        window.location.href = "dashboard.html"

    }

    else{
        alert("Usuário ou senha incorretos. Tente novamente.")

    }
}