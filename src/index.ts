import { Usuario, BancoDeDados } from './models/Usuarios';

class Sistema {
  private bancoDeDados: BancoDeDados;

  constructor() {
    this.bancoDeDados = new BancoDeDados();
  }

  login(nome: string, senha: string): boolean {
    const usuario = this.bancoDeDados
      .obterUsuarios()
      .find((user) => user.nome === nome && user.senha === senha);
    return !!usuario;
  }
}
