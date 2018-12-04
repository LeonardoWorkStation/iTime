package br.edu.unisep.ws;

import javax.ws.rs.Path;

import br.edu.unisep.vo.AvaliacaoVO;

@Path("avaliacoes")
public class AvaliacaoWS extends WSGenerico<AvaliacaoVO> {

	public AvaliacaoWS() {
		super(AvaliacaoVO.class);
	}

	
}
