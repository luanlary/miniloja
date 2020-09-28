var LojaCarrinhoCompras = (function () {
    function LojaCarrinhoCompras() {
        this.produtos = [];
    }
    LojaCarrinhoCompras.prototype.adcionar = function (produto) {
        var produtoLocalStorage = localStorage.getItem("produtoStorage");
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            this.produtos = JSON.parse(localStorage.getItem("produtoStorage"));
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoStorage", JSON.stringify(this.produtos));
    };
    LojaCarrinhoCompras.prototype.obterProdutos = function () {
        var produtoLocalStorage = localStorage.getItem("produtoStorage");
        if (!produtoLocalStorage) {
            return this.produtos;
        }
        else {
            this.produtos = JSON.parse(localStorage.getItem("produtoStorage"));
            return this.produtos;
        }
    };
    LojaCarrinhoCompras.prototype.removerProduto = function (produto) {
        var produtoLocaStorage = localStorage.getItem("produtoStorage");
        if (produtoLocaStorage) {
            this.produtos = JSON.parse(produtoLocaStorage);
            this.produtos = this.produtos.filter(function (p) { return p.id != produto.id; });
            localStorage.setItem("produtoStorage", JSON.stringify(this.produtos));
        }
    };
    LojaCarrinhoCompras.prototype.atualizar = function (produtos) {
        localStorage.setItem("produtoStorage", JSON.stringify(produtos));
    };
    LojaCarrinhoCompras.prototype.temItensCarrinhoCompras = function () {
        var itens = this.obterProdutos();
        return (itens.length > 0);
    };
    return LojaCarrinhoCompras;
}());
export { LojaCarrinhoCompras };
//# sourceMappingURL=loja.carrinho.component.js.map