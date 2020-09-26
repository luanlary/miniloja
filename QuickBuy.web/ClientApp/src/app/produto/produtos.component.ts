import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../../servicos/produto/produto.servico";
import { Produto } from "../Modelo/Produto";

@Component({
  selector: "app-produto",
  templateUrl: "produtos.component.html",
  styleUrls: ["produtos.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  constructor(private produtoServico: ProdutoServico) {

  }
  
  ngOnInit(): void {
    this.produto = new Produto();        
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produto_json => {
          console.log(produto_json);

        },
        err => {
          console.log(err.error);
        }
    );
  }

}
