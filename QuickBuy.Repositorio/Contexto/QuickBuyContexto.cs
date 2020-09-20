using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.ObjetoDeValor;
using QuickBuy.Repositorio.Config;
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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /// Classes de mapeamento
            modelBuilder.ApplyConfiguration(new UsusarioConfiguracao());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguracao());
            modelBuilder.ApplyConfiguration(new PedidoConfiguracao());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguracao());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguracao());
            base.OnModelCreating(modelBuilder);
        }
        public QuickBuyContexto(DbContextOptions options) : base(options)
        {
        }
    }
}
