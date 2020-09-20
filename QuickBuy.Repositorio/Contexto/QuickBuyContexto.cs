using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetoDeValor;
using System.Xml.Linq;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto: DbContext
    {
        
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }
        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
        }
    }
}
