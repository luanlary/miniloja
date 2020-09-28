import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PedidoServico } from "../../../../servicos/pedido/pedido.servico";
import { ProdutoServico } from "../../../../servicos/produto/produto.servico";
import { UsuarioServico } from "../../../../servicos/usuario/usuario.servico";
import { ItemPedido } from "../../Modelo/ItemPedido";
import { Pedido } from "../../Modelo/Pedido";
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

  constructor(private _produotoServico: ProdutoServico,
    private router: Router,
    private _usuarioServico: UsuarioServico,
    private _pedidoServico: PedidoServico) {

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

  public efetuarCompra() {
    let pedido = this.criarPedido();
    this._pedidoServico.efetuarCompra(pedido)
      .subscribe(
        numero_pedido => {
          sessionStorage.setItem("PedidoId", numero_pedido.toString()); 
        },
        e => {
          console.log(e.errors);
        }
      );


  }

  public criarPedido(): Pedido {
    var pedido = new Pedido();
    pedido.usuarioId = this._usuarioServico.usuario.id;
    pedido.cep = "04312010";
    pedido.cidade = "São Paulo";
    pedido.endereco = "Rua Eduardo Pereira, Vila Guarani";
    pedido.estado = "São Paulo";
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = "449";

    this.produtos = this.carrinhoCompras.obterProdutos();
    for (let p of this.produtos) {
      var item = new ItemPedido();
      item.produtoId = p.id;
      item.quantidade = p.quantidade;
      pedido.itensPedido.push(item);
    }

    return pedido;
  }

}
