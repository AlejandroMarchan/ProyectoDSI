import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { CartaService } from '../services/carta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public copiaVuelos: {
    fechaSalida: Date,
    precio: number,
    reservado: boolean,
    origen: {
      ciudad: string,
      bandera: string
    },
    destino: {
      ciudad: string,
      bandera: string
    }
  } [];

  public paises;

  constructor(public cartaService: CartaService,public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){

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

  buscarOrigen(ev: any) {
    // // Reset items back to all of the items
    // this.copiaVuelos = this.vuelosService.vuelos.slice();
    //
    // // set val to the value of the searchbar
    // const val = ev.target.value;
    //
    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.copiaVuelos = this.vuelosService.vuelos.filter((vuelo) => {
    //     return (vuelo.origen.ciudad.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   });
    //   console.log(this.copiaVuelos);
    // }
  }

}
