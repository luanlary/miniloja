import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServico } from '../../../servicos/usuario/usuario.servico';
import { Usuario } from '../Modelo/usuario';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  get usuario() {
    return this.usuarioServico.usuario;
  }


  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {

    return this.usuarioServico.usuario_autenticado();    
  }

  public usuarioAdministrador(): boolean {

    return this.usuarioServico.usuario_administrador();
  }

  sair() {
    this.usuarioServico.limparSesssao();
    this.router.navigate(["/"]);
  }
}
