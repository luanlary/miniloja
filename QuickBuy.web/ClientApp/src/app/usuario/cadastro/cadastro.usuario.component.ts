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
  public returnUrl: string;
  public mensagem: string
  public confirmasenha: string;
  private ativarSpinner: boolean;
  public usuarioCadastrado: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];  

  }

  public cadastrar() {
    this.ativarSpinner = true;
    if (this.usuario.senha != this.confirmasenha) {
      this.mensagem = "A senha não correponde a confirmação!";
      return;
    }
      
      
    
    this.usuarioServico.cadastrarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          this.usuarioCadastrado = true;
          this.mensagem = "";
          this.ativarSpinner = false;
          console.log(usuario_json)
        },
        err => {
          this.mensagem = err.error;
          this.ativarSpinner = false;
          this.usuarioCadastrado = false;          
        }
      );
  }

}
