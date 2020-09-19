using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if (Id <= 0)
                AdcionarCritica("O campo Id deve ser preeenchido!");

            if (Quantidade <= 0)
                AdcionarCritica("O campo quantidade deve ser informado!");

            if (ProdutoId <= 0)
                AdcionarCritica("O campo produto deve ser informado!");
        }
    }
}
