import { Injectable } from "@angular/core";
import { AlunoVO } from "src/vo/vo";

@Injectable()
export class UsuarioService {

    public aluno : AlunoVO

    constructor() {
        this.restaurarAluno()
    }

    login(a : AlunoVO) {
        this.aluno = a
        sessionStorage.setItem('ALUNO', JSON.stringify(this.aluno))
    }

    logout() {
        this.aluno = null
        sessionStorage.removeItem('ALUNO')
    }

    private restaurarAluno() {
        let a = sessionStorage.getItem('ALUNO')
        if (a != null) {
            this.aluno = JSON.parse(a)
        }
    }

}