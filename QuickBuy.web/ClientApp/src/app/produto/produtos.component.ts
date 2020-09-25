import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template: "./produtos.component.html",
  styleUrls: ["produtos.component.css"]
})

export class ProdutoComponent {
  public id: Number;
  public nome: string;
  public descricao: string;
  public preco: Number;
  public liberadoParaVenda: boolean;
  public obterNome(): string {
    return "Sansung"
  }

}
