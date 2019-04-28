import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})

export class RankingPage {

  usuarios: Usuario[];
  puestos: number[];

  constructor(private usuarioService: UsuarioService) {
    console.log('constructor');
    this.usuarioService.getUsuarios().subscribe( data => {
      console.log(data);
      this.usuarios = data;
      this.usuarios.sort((a,b) => {
        if (a.dinero < b.dinero) {
          return 1;
      }
      if (a.dinero > b.dinero) {
          return -1;
      }
      return 0;
    });
    },
    error => {console.log(error);});
    console.log('hola');
  }

}
