import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private authService: AuthService) {}

  fazerLogin() {
    if (!this.usuario || !this.senha) {
      this.mensagem = '❌ Preencha todos os campos!';
      return;
    }

    this.mensagem = '⏳ Processando...';
    this.authService.login(this.usuario, this.senha).subscribe({
      next: (res) => {
        if (res.status === 'OK') {
          this.mensagem = `✅ Login feito com sucesso! Token: ${res.token}`;
          // Opcional: Salvar o token no localStorage
          localStorage.setItem('token', res.token);
        } else {
          this.mensagem = `❌ ${res.mensagem}`;
        }
      },
      error: (err) => {
        this.mensagem = `❌ Erro de conexão: ${err.message}`;
      }
    });
  }
}