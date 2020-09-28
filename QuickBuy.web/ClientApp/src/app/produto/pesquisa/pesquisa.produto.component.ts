import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "pesquisa.produto.component.html",
  styleUrls: ["pesquisa.produto.component.css"]
})


export class PesquisaProdutoComponent implements OnInit {

  public produtos: Produto[];
  public mensagem: string;
  public ativarSpinner: boolean;

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.ativarSpinner = true;
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        lista_produtos => {
          this.produtos = lista_produtos;
          this.ativarSpinner = false;
        },
        e => {
          console.log(e.error);
          this.ativarSpinner = false;

          this.mensagem = e.error;
        }
      );
  }

  public adicionarProduto() {
    this.router.navigate(["/produto"]);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado?");
    if (retorno) {
      this.produtoServico.deletar(produto)
        .subscribe(
          produtos => {
            this.produtos = produtos;
          },
          e => {
            console.log(e.error)
          }
        );
    }

  }
    public editarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente editar o produto selecionado?");
      if (retorno) {
        sessionStorage.setItem("produtoSessao", JSON.stringify(produto));
        this.router.navigate(["/produto"]);

    }

  }

  ngOnInit(): void {

    
  }

}
