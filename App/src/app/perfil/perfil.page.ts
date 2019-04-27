import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';
import { ContrasenaPage } from '../contrasena/contrasena.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
perfil: Usuario
  constructor( public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController) {
   
   }

  async ngOnInit() {  
    this.usuarioService.getUsuario(this.usuarioService.username).subscribe( async data => {
      this.perfil = data;
    });
  }
  async EditarMenu(){
    let editarperfilModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: ContrasenaPage
    });
    await editarperfilModal.present();
  }
  



}
