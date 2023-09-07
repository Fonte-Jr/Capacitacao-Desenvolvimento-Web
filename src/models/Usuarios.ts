export class Usuario {
    constructor(public nome: string, public senha: string) {}
  
    editarUsuario(novoNome: string, novaSenha: string) {
      this.nome = novoNome;
      this.senha = novaSenha;
    }
  }
  
  export class BancoDeDados {
    private usuarios: Usuario[] = [];
  
    obterUsuarios(): Usuario[] {
      return this.usuarios;
    }
  
    salvarUsuario(usuario: Usuario) {
      this.usuarios.push(usuario);
    }
  
    editarUsuario(nomeAntigo: string, novoNome: string, novaSenha: string) {
      const usuario = this.usuarios.find((user) => user.nome === nomeAntigo);
      if (usuario) {
        usuario.editarUsuario(novoNome, novaSenha);
      }
    }
  
    deletarUsuario(nome: string) {
      const index = this.usuarios.findIndex((user) => user.nome === nome);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
      }
    }
  }