import { Component, OnInit } from "@angular/core";
import { UsuarioServico } from "../../../../servicos/usuario/usuario.servico";
import { Usuario } from "../../Modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";




@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})


export class CadastroUsuarioComponent implements OnInit {

  public usuario: Usuario;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();

  }

  public cadastrar() {
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario_json => {

        },
        err => {
          err.errors
        }
      );
  }

}
