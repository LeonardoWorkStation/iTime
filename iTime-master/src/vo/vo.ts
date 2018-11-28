export class AlunoCursoVO {
    public id: number;
    public aluno: AlunoVO;
    public curso: CursoVO;
}

export class AlunoVO {
    public id: number;
    public nome: string;
    public semestre: number;
}

export class AvaliacaoVO{
    public id : number;
    public id_requisicao : RequisicaoVO;
    public status : number;
    public horasValidadas : number;
    public dataValicadao : Date;

}

export class CordenadorVO {
    private id: number;
    private nome: string;
}

export class CursoVO {
    public cordenador: CordenadorVO;
    public id: number;
    public nome: string;
}

export class PapelUsuarioVO {

}

export class PapelVO{
    private id : Number;
    private nomePapel : string;
}

export class RequisicaoVO {
    public id: number;
    public id_aluno_curso : AlunoCursoVO;
    public id_tipo_hora : TipoHoraVO;
    private nomeEvento: string;
    private entidade: string;
    private descricao: string;
    private dataInicial: Date;
    private dataFinal: Date;
    public horasRequeridas: number;
    public documento : string;
}

export class TipoHoraVO {
    public id: number;
    public nome: string;
}

export class UsuarioVO {
    private id : number;
    private nome : string;
}