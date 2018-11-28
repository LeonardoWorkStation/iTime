import { Component, OnInit } from '@angular/core';
import { RequisicaoVO } from 'src/vo/vo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  API_PATH = "http://localhost:8080/iTimeAPI/ws/"

  public requisicoes : RequisicaoVO[] = [];

  constructor(private http : HttpClient, private router : Router) {}

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.http.get<RequisicaoVO[]>(this.API_PATH + "requisicoes/listar").subscribe(
      (retorno) => {
        this.requisicoes = retorno;
      },
      (erro) => {
        alert("Não foi possível carregar da lista de solicitações" + erro.message);
      }
    )
  }

  abrirSolicitacao(id) {
    this.router.navigate(['/open-solicitacao', {
      id : id
    }])
  }
}
