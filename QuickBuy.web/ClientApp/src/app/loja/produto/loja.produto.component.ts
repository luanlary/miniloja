import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";

@Component({
  selector: 'loja-produto',
  templateUrl: "loja.produto.component.html",
  styleUrls: ["loja.produto.component.css"],
})

export class LojaProdutoComponent implements OnInit {
  public produto: Produto;

  constructor(private _produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem("abrirproduto");
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    }

  }

}
