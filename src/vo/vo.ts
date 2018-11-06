export class Requisicao {
    //Verificar se é lista AlunosCursos
    public tipoHora: TipoHora;
    public id: number;
    public nome: string;
    public entidade: string;
    public descricao: string;
    public dataInicial: Date;
    public dataFinal: Date;
    public horasRequeridas: number;
}

export class AlunosCursos {
    public id: number;
    public aluno: Aluno;
    public curso: Curso;
}

export class Aluno {
    public id: number;
    public nome: string;
    public semestre: number;
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