import { Component, OnInit } from '@angular/core';
import { Aluno } from "src/vo/vo";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public aluno: Aluno;

  ngOnInit() {

    this.aluno = new Aluno

  }

}