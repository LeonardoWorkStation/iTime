export class Requisicao {
    public tipoHora: TipoHora;
    public id: number;
    public nome: string;
    public entidade: string;
    public descricao: string;
    public dataInicial: Date;
    public dataFinal: Date;
    public horasRequeridas: number;
    public alunoCurso: AlunosCursos;
}

export class AlunosCursos {
    public id: number;
    public aluno: Aluno;
    public curso: Curso;
}

export class Aluno {
    public nome: string;
    public sobrenome: string;
    public semestre: number;
    public ra: number;

}

export class Cordenador {
    public id: number;
    public nome: string;
}

export class Curso {
    public cordenador: Cordenador;
    public id: number;
    public nome: string;
}

export class TipoHora {
    public id: number;
    public descricao: string;
}