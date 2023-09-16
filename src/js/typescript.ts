
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        localStorage.setItem('username', 'seu_usuario');
        localStorage.setItem('password', 'sua_senha');  

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha incorretos. Tente novamente.');
        }
    });
});
