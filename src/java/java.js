function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "fontejr@gmail.com" && senha == "fontejr123"){
        window.location.href = "dashboard.html";
      }
      else{
        alert('Usuario ou senha incorretos');
    }

}


