package br.edu.unisep.vo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="avaliacoes")
public class AvaliacaoVO {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_avaliacao")
	private Integer id;
	
	@OneToOne
	@JoinColumn(name="id_requisicao")
	private RequisicaoVO id_requisicao;
	
	@Column(name="status")
	private Integer status;
	
	@Column(name="horas_validadas")
	private Double horasValidadas;
	
	@Column(name="data_validacao")
	private LocalDate dataValidacao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public RequisicaoVO getId_requisicao() {
		return id_requisicao;
	}

	public void setId_requisicao(RequisicaoVO id_requisicao) {
		this.id_requisicao = id_requisicao;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Double getHorasValidadas() {
		return horasValidadas;
	}

	public void setHorasValidadas(Double horasValidadas) {
		this.horasValidadas = horasValidadas;
	}

	public LocalDate getDataValidacao() {
		return dataValidacao;
	}

	public void setDataValidacao(LocalDate dataValidacao) {
		this.dataValidacao = dataValidacao;
	}
	
}
