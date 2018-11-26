import { Component, OnInit } from '@angular/core';
import { AlunoVO } from 'src/vo/vo';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  API_PATH = "http://localhost:8080/iTimeAPI/ws/"
  public aluno: AlunoVO = new AlunoVO();

  constructor(private http : HttpClient, private router : Router){

  }
  
  ngOnInit() {

  }

  public salvar(){
    this.http.post(this.API_PATH + "alunos/salvar", this.aluno).subscribe(
      (retorno) => {
        alert("Aluno cadastrado com sucesso!!");
        this.router.navigateByUrl('/solicitacoes');
      },
      (erro) => {
        alert("Erro ao salvar aluno" + erro.message);
      }

    )
  }

}