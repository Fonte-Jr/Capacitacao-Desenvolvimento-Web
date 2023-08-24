
function verificando() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "pedro@gmail.com" && senha === "13/12/1981") {
        window.location.href = "dashboard.html";
    } else {
        alert('Login ou senha estão incorretos! Tente novamente');
    }
}

