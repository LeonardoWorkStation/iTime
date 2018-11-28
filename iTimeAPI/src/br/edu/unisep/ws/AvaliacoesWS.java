package br.edu.unisep.ws;

import javax.ws.rs.Path;

import br.edu.unisep.vo.AvaliacaoVO;

@Path("avaliacoes")
public class AvaliacoesWS extends WSGenerico<AvaliacaoVO> {

	AvaliacoesWS() {
		super(AvaliacaoVO.class);
	}
	
}
