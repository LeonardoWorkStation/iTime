export class AlunoCursoVO {
    private id: number;
    private aluno: AlunoVO;
    private curso: CursoVO;
}

export class AlunoVO {
    private id: number;
    private nome: string;
    private semestre: number;
}

export class AvaliacaoVO{
    private id : number;
    private id_requisicao : RequisicaoVO;
    private status : number;
    private horasValidadas : number;
    private dataValicadao : Date;

}

export class CordenadorVO {
    private id: number;
    private nome: string;
}

export class CursoVO {
    private cordenador: CordenadorVO;
    private id: number;
    private nome: string;
}

export class PapelUsuarioVO {

}

export class PapelVO{
    private id : Number;
    private nomePapel : string;
}

export class RequisicaoVO {
    private id: number;
    private id_aluno_curso : AlunoCursoVO;
    private id_tipo_hora : TipoHoraVO;
    private nomeEvento: string;
    private entidade: string;
    private descricao: string;
    private dataInicial: Date;
    private dataFinal: Date;
    private horasRequeridas: number;
    public documento : string;
}

export class TipoHoraVO {
    private id: number;
    private nome: string;
}

export class UsuarioVO {
    private id : number;
    private nome : string;
}