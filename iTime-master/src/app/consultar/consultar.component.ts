import { Component, OnInit } from '@angular/core';
import { AlunoVO } from 'src/vo/vo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  public alunos : AlunoVO[] = [];
  API_PATH = "http://localhost:8080/iTimeAPI/ws/"

  constructor(private http : HttpClient){

  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.http.get<AlunoVO[]>(this.API_PATH + "alunos/listarOrdenado").subscribe(
      (retorno) => {
        this.alunos = retorno
      },
      (erro) => {
        alert("Erro ao carregar a lista de alunos" + erro.message);
      }

    )
  }
}
