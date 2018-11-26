package br.edu.unisep.ws;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.Session;
import org.hibernate.query.Query;

import br.edu.unisep.hibernate.HibernateSessionFactory;
import br.edu.unisep.vo.AlunoVO;

@Path("/alunos")
public class AlunoWS extends WSGenerico<AlunoVO> {

	public AlunoWS() {
		super(AlunoVO.class);
	}
	
	@GET
	@Path("/listarOrdenado")
	@Produces(MediaType.APPLICATION_JSON)
	public List<AlunoVO> listarOrdenado() {
		Session session = HibernateSessionFactory.getSession();
		Query<AlunoVO> q = session.createQuery("from AlunoVO order by nome", AlunoVO.class);
		List<AlunoVO> resultado = q.list();
		session.close();
		return resultado;
	}
}
