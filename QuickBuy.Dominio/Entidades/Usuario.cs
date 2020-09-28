using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario: Entidade
    {
        public int Id { get; set; }
        public string  Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public bool EhAdministrador { get; set; }
        /// <summary>
        /// Um usuário pode ter nenhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if (Id <= 0)
                AdcionarCritica("O campo Id deve ser preeenchido!");

            if (string.IsNullOrWhiteSpace(Nome))
                AdcionarCritica("O Campo nome deve ser preenchido!");

            if (string.IsNullOrWhiteSpace(Email))
                AdcionarCritica("O campo email deve ser preenchido!");

            if (string.IsNullOrWhiteSpace(Sobrenome))
                AdcionarCritica("O campo descrição deve ser preenchido!");

            if (string.IsNullOrWhiteSpace(Senha))
                AdcionarCritica("O campo Senha deve ser preenchido!");

        }
    }
}
