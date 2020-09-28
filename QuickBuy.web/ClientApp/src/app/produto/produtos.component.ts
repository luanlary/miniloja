import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
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
  public ativarSpiner: boolean;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) {


  }

  public inputChange(files: FileList) {
    this.ativarSpiner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        arquivo_json => {
          this.produto.nomeArquivo = arquivo_json;
          this.ativarSpiner = false;
          this.mensagem = "";
      },
      e => {
        console.log(e.error);
        this.mensagem = e.error;
        this.ativarSpiner = false;
      }
    );

  }
  
  ngOnInit(): void {
    
    var produtoSessao = sessionStorage.getItem("produtoSessao");
    if (produtoSessao)
      this.produto = JSON.parse(produtoSessao);
    else
      this.produto = new Produto();
  }

  public cadastrar() {
    this.ativarSpiner = true;
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produto_json => {
          
          this.ativarSpiner = false;
          this.mensagem = "Produto salvo com sucesso!";
          this.router.navigate(["/pesquisar-produto"]);
        },
        err => {
          console.log(err.error);
          this.ativarSpiner = false;
          this.mensagem = err.error;
        }
    );
  }

}
