using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : Controller
    {
        private  IProdutoRepositorio _produtoRepositorio;
        public IHttpContextAccessor _httpContextAccessor;
        public IHostingEnvironment _hostingEnvironment;

        public ProdutoController(IProdutoRepositorio produtoRepositorio, 
            IHttpContextAccessor httpContextAccessor,
            IHostingEnvironment hostingEnvironment)
        {
            this._produtoRepositorio = produtoRepositorio;
            this._httpContextAccessor = httpContextAccessor;
            this. _hostingEnvironment = hostingEnvironment;
            
        }
     

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Json(_produtoRepositorio.ObterTodos());
            } catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        [HttpPost]
        public IActionResult Post([FromBody] Produto produto)
        {
            try
            {
                produto.Validate();
                if(!produto.EhValido)
                {
                    return BadRequest(produto.ObterMensagensValidacao());
                };
                
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);
               

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("deletar")]
        public IActionResult deletar([FromBody] Produto produto)
        {
            try
            {


                _produtoRepositorio.Remover(produto);
                return Json(_produtoRepositorio.ObterTodos());


            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost("enviarArquivo")]
        public IActionResult enviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomArquivo = formFile.FileName;
                var extensao = nomArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNome(nomArquivo, extensao);
                var pasta = _hostingEnvironment.WebRootPath + "\\arquivos\\";

                using (var streamArquivo = new FileStream(pasta + novoNomeArquivo, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }

        }

        private static string GerarNovoNome(string nomArquivo, string extensao)
        {
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}_{DateTime.Now.Month}" +
                $"_{DateTime.Now.Day}_{DateTime.Now.Hour}_{DateTime.Now.Minute}" +
                $"_{DateTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }
    }

}
