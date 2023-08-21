
function verificando() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "123@gmail.com" && senha === "123pedro") {
        window.location.href = "dashboard.html";
    } else {
        alert('Login ou senha estão incorretos!');
    }
}

