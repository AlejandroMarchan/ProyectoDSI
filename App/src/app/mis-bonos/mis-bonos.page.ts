import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { CartaService } from '../services/carta.service';
import QRCode from 'qrcode';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-mis-bonos',
  templateUrl: './mis-bonos.page.html',
  styleUrls: ['./mis-bonos.page.scss'],
})
export class MisBonosPage {

  public generated: string = '';

  constructor(public cartaService: CartaService,public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){

  }

  displayQrCode() {
    return this.generated !== '';
  }

  process() {
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(this.usuarioService.username, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
      console.log(err);
    })
  }

  quedanBonos(){
    if(this.usuarioService.bonos > 0){
      return false;
    }
    return true;
  }

  comprarBono(){
    this.usuarioService.usuario.bonos++;
    this.usuarioService.updateUsuario(this.usuarioService.usuario, this.usuarioService.username);
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
