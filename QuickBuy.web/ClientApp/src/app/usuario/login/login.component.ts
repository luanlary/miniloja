import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../Modelo/usuario";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["login.component.css"],
})

export class LoginComponent implements OnInit {

  public usuario;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute)
  {

  } 
    ngOnInit(): void {
      this.usuario = new Usuario();
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];     
  }

  entrar() {
    if (this.usuario.email == 'luanlary.bg@gmail.com' && this.usuario.senha == 'Sidi4124#') {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }
}
