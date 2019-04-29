import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { LoginPage } from '../login/login.page';
import { CartaService } from '../services/carta.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(public usuarioService: UsuarioService,private cartaService: CartaService, public toastCtrl: ToastController, public modalCtrl: ModalController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async abrirLogin(){
    let loginModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: LoginPage
    });
    await loginModal.present();
  }

  async cerrarSesion(){
    this.cartaService.editar==false;
    const alert = await this.alertCtrl.create({
      header: 'Cerrar Sesión',
      message: '¿Desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: async () => {
            this.usuarioService.logged = false;
            const toast = await this.toastCtrl.create({
              message: '¡Hasta pronto ' + this.usuarioService.username + '!',
              duration: 2500
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present();
  }
}
