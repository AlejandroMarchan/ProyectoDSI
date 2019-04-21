import { Component, OnInit } from '@angular/core';
import { Carta } from '../interfaces/carta';
import { CartaService } from '../services/carta.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
