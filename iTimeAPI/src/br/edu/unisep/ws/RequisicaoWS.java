package br.edu.unisep.ws;

import java.io.File;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.Random;

import javax.servlet.ServletContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.edu.unisep.hibernate.HibernateDAO;
import br.edu.unisep.vo.RequisicaoVO;

@Path("/requisicoes")
public class RequisicaoWS extends WSGenerico<RequisicaoVO> {

	public RequisicaoWS() {
		super(RequisicaoVO.class);
	}
	
	@Context
	private ServletContext context;

	@POST
	@Path("/salvarRequisicao")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public void upload(@FormDataParam("dados") String dados, @FormDataParam("arquivo") InputStream is,
			@FormDataParam("arquivo") FormDataContentDisposition disp) {

		try {
			ObjectMapper mapper = new ObjectMapper();
			RequisicaoVO requisicao = mapper.readValue(dados, RequisicaoVO.class);

			String caminho = context.getRealPath("/") + "uploads/" + disp.getFileName();
			requisicao.setDocumento("uploads/" + disp.getFileName());
			
			HibernateDAO<RequisicaoVO> dao = new HibernateDAO<>();
			dao.salvar(requisicao);
			
			byte[] conteudo = IOUtils.toByteArray(is);
			FileUtils.writeByteArrayToFile(new File(caminho), conteudo);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
		
}
