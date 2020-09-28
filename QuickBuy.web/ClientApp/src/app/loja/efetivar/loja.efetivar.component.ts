import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";
import { LojaCarrinhoCompras } from "../carrinho/loja.carrinho.component";


@Component({
  selector: "loja-efetivar",
  templateUrl: "loja.efetivar.component.html",
  styleUrls: ["loja.efetivar.component.css"],
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public Total: number;

  constructor(private _produotoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();

  }

  public atualizarPreco(produto: Produto, quantidade: number) {

    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }

    produto.preco = produto.precoOriginal * quantidade;

    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();
  }

  public removerProduto(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }
  public atualizarTotal() {
    this.Total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

}
