import { Component, OnInit } from '@angular/core';
import { AlunoVO } from 'src/vo/vo';
import { HttpService } from 'src/services/http.service';
import { UsuarioService } from 'src/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: AlunoVO = new AlunoVO

  constructor(
    private http: HttpService,
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.http.executePost("Inserir o Path da URL quando estiver pronto", this.usuario, (retorno) => {
      this.userService.login(retorno)
      this.router.navigateByUrl('/home/solicitacoes')
    })
  }
}
