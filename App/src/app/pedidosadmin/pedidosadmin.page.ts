import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { Pedidos } from '../interfaces/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { PedidosusuarioPage } from '../pedidosusuario/pedidosusuario.page';

@Component({
  selector: 'app-pedidosadmin',
  templateUrl: './pedidosadmin.page.html',
  styleUrls: ['./pedidosadmin.page.scss'],
})

export class PedidosadminPage {
 
  pedidos: Pedidos[];
  public finpedido: boolean = false;
  constructor(private pedidosService: PedidosService, public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){}

 
  async ionViewWillEnter() {
    this.pedidosService.getPedidos().subscribe( async data => {
      this.pedidos = data;
    });
  }
  async cerrarSesion(){
    this.pedidosService.finpedido==false;
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