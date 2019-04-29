import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { CartaService } from '../services/carta.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-canjear-bonos',
  templateUrl: './canjear-bonos.page.html',
  styleUrls: ['./canjear-bonos.page.scss'],
})
export class CanjearBonosPage {

  public restado = false;

  constructor(private qrScanner: QRScanner, public cartaService: CartaService,public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){

  }

  escanearCodigoQR(){
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted


           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);
             let usuario: Usuario;
             this.usuarioService.getUsuario(text).subscribe(
               data => {
                 if(!this.restado){
                   usuario = data;
                   usuario.bonos--;
                   this.usuarioService.updateUsuario(usuario, text);
                   this.restado = true;
                   this.qrScanner.hide(); // hide camera preview
                   scanSub.unsubscribe(); // stop scanning
                  }
               }
             );
           });
           this.qrScanner.show();

         } else if (status.denied) {
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) => console.log('Error is', e));
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
