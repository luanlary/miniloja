import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { Produto } from "../../Modelo/Produto";
import { LojaCarrinhoCompras } from "../carrinho/loja.carrinho.component";

@Component({
  selector: 'loja-produto',
  templateUrl: "loja.compra.sucesso.component.html",
  styleUrls: ["loja.compra.sucesso.component.css"],
})

export class LojaCompraSucesso implements OnInit {

  public pedidoId: string;
  constructor(private _produtoServico: ProdutoServico, private router: Router) {

  }

  ngOnInit(): void {
    this.pedidoId = sessionStorage.getItem("PedidoId");
    

  }
}
