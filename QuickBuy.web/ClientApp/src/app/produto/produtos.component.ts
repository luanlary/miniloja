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
  public arquivoSelecionado: File;
  constructor(private produtoServico: ProdutoServico) {

  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        arquivo_json => {
          console.log(arquivo_json);
      },
      e => {
        console.log(e.error);
      }
    );

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
