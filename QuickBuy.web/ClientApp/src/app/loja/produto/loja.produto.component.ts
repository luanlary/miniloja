import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";
import { LojaCarrinhoCompras } from "../carrinho/loja.carrinho.component";

@Component({
  selector: 'loja-produto',
  templateUrl: "loja.produto.component.html",
  styleUrls: ["loja.produto.component.css"],
})

export class LojaProdutoComponent implements OnInit {
  public produto: Produto;
  public carrinhoCompras: LojaCarrinhoCompras;

  constructor(private _produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {

    this.carrinhoCompras = new LojaCarrinhoCompras();

    var produtoSession = sessionStorage.getItem("abrirproduto");
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    }

  }

  public comprar(produto: Produto) {
    this.carrinhoCompras.adcionar(this.produto);
    sessionStorage.setItem("produtoComprar", JSON.stringify(produto));
    this.router.navigate(['/loja-efetivar']);
  }

}
