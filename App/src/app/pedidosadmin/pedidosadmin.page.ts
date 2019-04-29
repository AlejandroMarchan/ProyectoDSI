import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { Pedidos } from '../interfaces/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { CartaService } from '../services/carta.service';

@Component({
  selector: 'app-pedidosadmin',
  templateUrl: './pedidosadmin.page.html',
  styleUrls: ['./pedidosadmin.page.scss'],
})

export class PedidosadminPage {

  pedidos: Pedidos[];
  public finpedido: boolean = false;
  constructor(private pedidosService: PedidosService, private cartaService: CartaService, public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){}


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
