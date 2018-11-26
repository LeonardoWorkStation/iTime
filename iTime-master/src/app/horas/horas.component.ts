import { Component, OnInit } from '@angular/core';
import { RequisicaoVO } from 'src/vo/vo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent implements OnInit {
  private URL_PATH = "http://localhost:8080/iTimeAPI/ws";
  public requisicao : RequisicaoVO = new RequisicaoVO();
  public documento : File = null;

  constructor(
    private http : HttpClient, 
    private router : Router
  ) { }

  ngOnInit() {
  }

  public arquivoAdicionado(event){
    console.log(event);
    this.documento = <File>event.target.files[0]
  }

  public salvarTudo(){
    this.salvarDocumento();   
    this.salvarRequisicao();
  }

  public salvarDocumento(){
    const formData = new FormData();
    formData.append('documento', this.documento, this.documento.name);
    this.http.post(this.URL_PATH + "/requisicoes/salvarDocumento", this.documento).subscribe(
        (retorno) => {
          
        },
        (erro) => {
          alert("Erro ao salvar o documento PDF!!" + erro.message);
        }
      )
    }

    public salvarRequisicao(){
      this.http.post(this.URL_PATH + "/requisicoes/salvarRequisicao", this.requisicao).subscribe(
          (retorno) => {
            alert("Requisição de horas cadastrada com sucesso!!");
            this.router.navigateByUrl('/solicitacoes');
          },
          (erro) => {
            alert("Erro ao salvar a requisição!!" + erro.message);
          }
        )
      }
}
