import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { PedidosService } from '../services/pedidos.service';
import { UsuarioService } from '../services/usuario.service';
import { Pedidos } from '../interfaces/pedidos';
import { Usuario } from '../interfaces/usuario';
import { CartaService } from '../services/carta.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-pedidosusuario',
  templateUrl: './pedidosusuario.page.html',
  styleUrls: ['./pedidosusuario.page.scss'],
})
export class PedidosusuarioPage{
  public art1: string = '';
  public art2: string = '';
  public art3: string = '';
  public art4: string = '';
  public art5: string = '';
  public art6: string = '';

  constructor(public pedidoService: PedidosService, public modalCtrl: ModalController, private cartaService: CartaService, public alertCtrl: AlertController, public toastCtrl: ToastController, public usuarioService: UsuarioService) { }

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
