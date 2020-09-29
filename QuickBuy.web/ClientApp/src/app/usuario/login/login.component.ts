import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../Modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServico } from "../../../../servicos/usuario/usuario.servico";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css",],
})

export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public returnUrl: string;
  public mensagem: string
  public ativarSpinner: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico)
  {

  } 
    ngOnInit(): void {
      this.usuario = new Usuario();
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];     
  }

  entrar() {

    this.ativarSpinner = true;
    
    this.usuarioServico.VerificarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          
          this.usuarioServico.usuario = usuario_json;

          if (this.returnUrl == null) {
            this.router.navigate(["/"]);
          } else {
            this.router.navigate([this.returnUrl]);
          }

          
        },
        err => {
          console.log(err.error);          
          this.mensagem = err.error;
          this.ativarSpinner = false;
        }
      );
  }
}
