import { Component, OnInit, Input } from '@angular/core';
import { RequisicaoVO, AvaliacaoVO } from 'src/vo/vo';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-open-solicitacao',
  templateUrl: './open-solicitacao.component.html',
  styleUrls: ['./open-solicitacao.component.css']
})
export class OpenSolicitacaoComponent implements OnInit {
  
  public requisicao : RequisicaoVO = new RequisicaoVO;
  public avaliacao : AvaliacaoVO = new AvaliacaoVO;
  public data = new Date();

  API_PATH = "http://localhost:8080/iTimeAPI/ws/"

  private id;

  constructor(private router : Router, private activeRoute : ActivatedRoute, private http : HttpClient) {
    activeRoute.params.subscribe( p => {
    this.id = p.id;
}) 
}

  ngOnInit() {
    this.listar();
  }

  listar(){
    
    this.http.get<RequisicaoVO>(this.API_PATH + 'requisicoes/pesquisarPorId/' + this.id).subscribe (
      (retorno) => {
        this.requisicao = retorno;
      },
      (erro) => {
        alert('Não foi possível obter o objeto selecionado' + erro.message);
      }
    )
  }

  aprovar(){
    this.avaliacao.id_requisicao = this.requisicao;
    this.avaliacao.status = 1;
    this.avaliacao.horasValidadas = this.requisicao.horasRequeridas;
    this.avaliacao.dataValicadao = this.data;

    this.http.post(this.API_PATH + 'avaliacoes/salvar', this.avaliacao).subscribe(
      (retorno) =>{
        alert('Aprovação salva com sucesso!');
        this.router.navigateByUrl('/solicitacoes');
      },
      (erro) => {
        alert('Não foi possível salvar a decisão de aprovação!' + erro.message + this.data);
      }
    )
    this.requisicao.status = 1; //alterar o status da requisição de atualiza sua condição no banco
    this.http.post(this.API_PATH + 'requisicoes/alterar', this.requisicao).subscribe(
      (retorno) => {
        
      },
      (erro => {
        alert('Erro ao atualizar tabela Requisições (aceitação)' + erro.message);
      })
    )
  }

  reprovar(){
    this.avaliacao.id_requisicao = this.requisicao;
    this.avaliacao.status = 0;
    this.avaliacao.horasValidadas = 0;
    this.avaliacao.dataValicadao = this.data;
    this.http.post(this.API_PATH + 'avaliacoes/salvar', this.avaliacao).subscribe(
      (retorno) =>{
        alert('Rejeição salva com sucesso!');
        this.router.navigateByUrl('/solicitacoes');
      },
      (erro) => {
        alert('Não foi possível salvar a decisão de rejeição!' + erro.message);
      }
    )
  
    this.requisicao.status = 0; //alterar o status da requisição de atualiza sua condição no banco
    this.http.post(this.API_PATH + 'requisicoes/alterar', this.requisicao).subscribe(
      (retorno) => {
        
      },
      (erro) => {
        alert('Erro ao atualizar tabela Requisições (rejeição)' + erro.message);
      })
  }

}
