package br.edu.unisep.ws;

import java.time.LocalDateTime;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import br.edu.unisep.hibernate.HibernateDAO;
import br.edu.unisep.vo.RequisicaoVO;

@Path("/requisicoes")
public class RequisicaoWS extends WSGenerico<RequisicaoVO> {

	public RequisicaoWS() {
		super(RequisicaoVO.class);
	}
	
	@Path("/salvarRequisicao")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvarDocumento(RequisicaoVO req) {
		LocalDateTime data = LocalDateTime.now();
		req.setDocumento("/home/alomdahmer/Git/src/documentos/documento_" + data);
		HibernateDAO<RequisicaoVO> dao = new HibernateDAO<>();
		dao.salvar(req);
	}
	
	/*
	@Path("/salvarDocumento")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvarRequisicao(??????) {
		????????????????????
		
	}
	*/
		
}
