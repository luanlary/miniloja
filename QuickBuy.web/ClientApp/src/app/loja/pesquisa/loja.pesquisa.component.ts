import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";

@Component({
  selector: "app-loja",
  templateUrl: "loja.pesquisa.component.html",
  styleUrls: ["loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {

  public produtos: Produto[];
  constructor(private _produtoServico: ProdutoServico, private router: Router) {
    this._produtoServico.obterTodosProdutos()
      .subscribe(
        lista_produtos => {
          this.produtos = lista_produtos;
        },
        e => {
          console.log(e.error)
        }
      );

  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem("abrirproduto", JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }

  ngOnInit(): void {
        
    }

}
