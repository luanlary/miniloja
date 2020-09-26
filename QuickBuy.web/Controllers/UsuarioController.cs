using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController: ControllerBase
    {
        private readonly IUsuarioRepositorio _usuarioRepository;

        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            this._usuarioRepository = usuarioRepositorio;
        }
        
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
               return  Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioCadastrado = _usuarioRepository.ObterPorEmail(usuario.Email);
                if (usuarioCadastrado != null)
                    return BadRequest("Usuário já cadastrado no sistema!");
                _usuarioRepository.Adicionar(usuario);

                return Ok(usuario);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioRetorno = this._usuarioRepository.ObterPorEmailSenha(usuario.Email, usuario.Senha);

                if(usuarioRetorno != null)
                {
                    return Ok(usuarioRetorno);
                }
                else
                {
                    return BadRequest("Usuário ou senha inválidos!");
                }
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }
    }
}
