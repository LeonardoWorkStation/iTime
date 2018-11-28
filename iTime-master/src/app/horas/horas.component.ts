import { Component, OnInit, ViewChild } from '@angular/core';
import { RequisicaoVO, AlunoCursoVO, CursoVO, TipoHoraVO, AlunoVO } from 'src/vo/vo';
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
  public alunoCurso : AlunoCursoVO = new AlunoCursoVO;
  public tipoHora : TipoHoraVO = new TipoHoraVO;
  public aluno : AlunoVO = new AlunoVO;
  public curso : CursoVO = new CursoVO;
  
  @ViewChild('arquivo') arquivo;


  constructor(
    private http : HttpClient, 
    private router : Router
  ) { }

  ngOnInit() {
  }

  salvar() {
    let formData = new FormData();
    
    this.alunoCurso.id = 2;
    this.tipoHora.id = 1;
    this.requisicao.id_aluno_curso = this.alunoCurso;
    this.requisicao.id_tipo_hora = this.tipoHora;

    formData.append('dados', JSON.stringify(this.requisicao));
    formData.append('arquivo', this.arquivo.nativeElement.files[0]);
    this.http.post(this.URL_PATH + '/requisicoes/salvarRequisicao', formData).subscribe( 
        () => {
            alert("Requisição salva com sucesso!!");
        }, 
        (erro) => {
            alert("Erro ao salvar a requisição" + erro.message);
        }
    )
}
}
