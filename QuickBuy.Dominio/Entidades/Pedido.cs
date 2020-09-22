using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;


namespace QuickBuy.Dominio.Entidades
{
    public class Pedido: Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Endereco { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }
      
        /// <summary>
        /// Um pedido deve ter pelo menos um item ou muitos itens depedidos
        /// </summary>
        public virtual ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if(!ItensPedido.Any())
            {
                AdcionarCritica("Crítica - Um pedido não pode ficar sem itens!");
            }
            if(string.IsNullOrEmpty(this.CEP))
            {
                AdcionarCritica("Crítica - O campo CEP deve ser preenchido!");
            }
        }
    }
}
