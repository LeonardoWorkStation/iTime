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
  public reqTemp : RequisicaoVO = new RequisicaoVO;
  public avaliacao : AvaliacaoVO = new AvaliacaoVO;
  public data : Date = new Date();

  API_PATH = "http://localhost:8080/iTimeAPI/ws/"

  private id;

  constructor(private http : HttpClient, private route : ActivatedRoute, private router : Router) { 
    this.id = route.paramMap['id'];
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    
    this.http.get<RequisicaoVO>(this.API_PATH + 'requisicoes/pesquisarPorId(id)').subscribe (
      (retorno) => {
        this.requisicao = retorno;
      },
      (erro) => {
        alert('Não foi possível obter o objeto selecionado' + erro.message);
      }
    )
  }

  aprovar(){
    this.reqTemp.id = this.requisicao.id;
    this.avaliacao.id_requisicao = this.reqTemp;
    this.avaliacao.status = 1;
    this.avaliacao.horasValidadas = this.requisicao.horasRequeridas;
    this.avaliacao.dataValicadao = this.data;

    this.http.post(this.API_PATH + '/avaliacoes/salvar', this.avaliacao).subscribe(
      (retorno) =>{
        alert('Aprovação salva com sucesso!');
        this.router.navigateByUrl('/solicitacoes');
      },
      (erro) => {
        alert('Não foi possível salvar a decisão de aprovação!' + erro.message);
      }
    )
  }

  reprovar(){
    alert('A requisição foi rejeitada!!');
    this.http.post(this.API_PATH + '/avaliacoes/salvar', this.avaliacao).subscribe(
      (retorno) =>{
        alert('Rejeição salva com sucesso!');
        this.router.navigateByUrl('/solicitacoes');
      },
      (erro) => {
        alert('Não foi possível salvar a decisão de rejeição!' + erro.message);
      }
    )
  }

}
