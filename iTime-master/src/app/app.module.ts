import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { HorasComponent } from './horas/horas.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { OpenSolicitacaoComponent } from './open-solicitacao/open-solicitacao.component';
import { StatusAlunoComponent } from './status-aluno/status-aluno.component';
import { LoginComponent } from './login/login.component';

const rotas : Routes = [
  {path: 'relatorio', component : RelatorioComponent},
  {path: 'solicitacoes', component : SolicitacoesComponent},
  {path: 'consultar', component : ConsultarComponent},
  {path: 'cadastrar', component : CadastrarComponent},
  {path: 'horas', component : HorasComponent},
  {path: 'open-solicitacao', component : OpenSolicitacaoComponent},
  {path: 'status-aluno', component : StatusAlunoComponent },
  {path: 'login', component : LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: '/solicitacoes'}

];

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HorasComponent,
    ConsultarComponent,
    RelatorioComponent,
    SolicitacoesComponent,
    OpenSolicitacaoComponent,
    StatusAlunoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
