package br.edu.unisep.vo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="requisicoes")
public class RequisicaoVO {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_requisicao")
	private Integer id;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_alunos_curso")
	private AlunosCursosVO id_alunos_curso;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_tipo_hora")
	private TipoHoraVO id_tipo_hora;
	
	@Column(name="nome_evento")
	private String nomeEvento;
	
	@Column(name="entidade")
	private String entidade;
	
	@Column(name="descricao")
	private String descricao;
	
	@Column(name="data_inicial")
	private LocalDate dataInicial;
	
	@Column(name="data_final")
	private LocalDate dataFinal;
	
	@Column(name="horas_requeridas")
	private Double horasRequeridas;
	
	@Column(name="documento")
	private String documento;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public AlunosCursosVO getId_alunos_curso() {
		return id_alunos_curso;
	}

	public void setId_alunos_curso(AlunosCursosVO id_alunos_curso) {
		this.id_alunos_curso = id_alunos_curso;
	}

	public TipoHoraVO getId_tipo_hora() {
		return id_tipo_hora;
	}

	public void setId_tipo_hora(TipoHoraVO id_tipo_hora) {
		this.id_tipo_hora = id_tipo_hora;
	}

	public String getNomeEvento() {
		return nomeEvento;
	}

	public void setNomeEvento(String nomeEvento) {
		this.nomeEvento = nomeEvento;
	}

	public String getEntidade() {
		return entidade;
	}

	public void setEntidade(String entidade) {
		this.entidade = entidade;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDate getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(LocalDate dataInicial) {
		this.dataInicial = dataInicial;
	}

	public LocalDate getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(LocalDate dataFinal) {
		this.dataFinal = dataFinal;
	}

	public Double getHorasRequeridas() {
		return horasRequeridas;
	}

	public void setHorasRequeridas(Double horasRequeridas) {
		this.horasRequeridas = horasRequeridas;
	}

	public String getDocumento() {
		return documento;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}
	
}
