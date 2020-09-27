using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        protected List<string> MensagemValidacao {

            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }
        protected void LimparMensagensValidacao()
        {
            MensagemValidacao.Clear();
        }
        protected void AdcionarCritica(string mensagem)
        {
            MensagemValidacao.Add(mensagem);
        }
        public abstract void Validate();
        public bool EhValido
        {
            get { return (!MensagemValidacao.Any()); }
        }
    }
}
