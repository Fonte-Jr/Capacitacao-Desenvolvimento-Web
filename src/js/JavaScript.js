    function verificando(){
        var login = document.getElementById('email').value;
        var senha = document.getElementById('input').value;
        document.getElementsByTagName('submit')
        if (login == '123@gmail.com' && senha == '1') {
            document.getElementById('permissao').innerText= 'está correto!'
        }
        return false
        
}
