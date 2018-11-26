package br.edu.unisep.ws;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.Session;
import org.hibernate.query.Query;

import br.edu.unisep.hibernate.HibernateDAO;
import br.edu.unisep.hibernate.HibernateSessionFactory;
import br.edu.unisep.vo.AlunoVO;

public class WSGenerico<T> {

	private Class<T> classe;
	
	public WSGenerico(Class<T> c) {
		this.classe = c;
	}
	
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public List<T> listar() {
		HibernateDAO<T> dao = new HibernateDAO<>();
		List<T> retorno = dao.listar(classe);
		return retorno;
	}
	
	
	@POST
	@Path("/salvar")
	@Consumes(MediaType.APPLICATION_JSON)
	public void salvar(T obj) {
		HibernateDAO<T> dao = new HibernateDAO<>();
		dao.salvar(obj);
	}

	@POST
	@Path("/excluir")
	@Consumes(MediaType.APPLICATION_JSON)
	public void excluir(T obj) {
		HibernateDAO<T> dao = new HibernateDAO<>();
		dao.excluir(obj);
	}
	
	@POST
	@Path("/alterar")
	@Consumes(MediaType.APPLICATION_JSON)
	public void alterar(T obj) {
		HibernateDAO<T> dao = new HibernateDAO<>();
		dao.alterar(obj);
	}
	
	@GET
	@Path("/pesquisarPorId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public T pesquisar(@PathParam("id") Integer id) {
		HibernateDAO<T> dao = new HibernateDAO<>();
		T retorno = dao.consultar(id, this.classe);
		return retorno;
	}
	
}
