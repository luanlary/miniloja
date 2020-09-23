import { Component } from "@angular/core";
import { Usuario } from "../../Modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.css"],
})

export class LoginComponent {

  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios = ["usuario1", "usuario2", "usuario3"];

  constructor()
  {
    this.usuario = new Usuario();
  } 
  entrar() {
    if (this.usuario.email == 'luanlary.bg@gmail.com' && this.usuario.senha == 'Sidi4124#') {
      this.usuarioAutenticado = true;
    }
  }
}
