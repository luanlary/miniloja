using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if (Id <=0)            
                AdcionarCritica("O campo Id deve ser preeenchido!");

            if (string.IsNullOrWhiteSpace(Nome))
                AdcionarCritica("O Campo nome deve ser preenchido!");

            if (string.IsNullOrWhiteSpace(Descricao))
                AdcionarCritica("O campo descrição deve ser preenchido!");

            if (Preco <= 0)
                AdcionarCritica("O campo preço deve ser informado!");
            
        }
    }
}
