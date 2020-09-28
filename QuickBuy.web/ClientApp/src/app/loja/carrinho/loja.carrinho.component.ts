import { Produto } from "../../Modelo/Produto";

export class LojaCarrinhoCompras {

  public produtos: Produto[] = [];

  public adcionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoStorage");
    if (!produtoLocalStorage) {
      this.produtos.push(produto);      
    } else {
      this.produtos = JSON.parse(localStorage.getItem("produtoStorage"));
      this.produtos.push(produto);      
    }
    localStorage.setItem("produtoStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem("produtoStorage");
    if (!produtoLocalStorage) {
      return this.produtos;
    } else {
      this.produtos = JSON.parse(localStorage.getItem("produtoStorage"));
      return this.produtos;
    }
 
  }

  public removerProduto(produto: Produto) {

    var produtoLocaStorage = localStorage.getItem("produtoStorage");
    if (produtoLocaStorage) {
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoStorage", JSON.stringify(this.produtos));
    }
  }

  public atualizar(produtos: Produto[] ) {
    localStorage.setItem("produtoStorage", JSON.stringify(produtos));
  }

  public temItensCarrinhoCompras() {
    var itens = this.obterProdutos();
    return (itens.length > 0);
  }
}
