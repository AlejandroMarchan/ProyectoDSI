import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { ActualizarPerfilPage } from '../actualizar-perfil/actualizar-perfil.page';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage {

  public password: string = '';

  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) {  }

  async AccederActualizar(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, introduzca la contraseña para editar el perfil.',
      buttons: ['Vale']
    });
    const ContrasenaIncorrecta = await this.alertCtrl.create({
      header: 'Contraseña errónea',
      message: 'la contraseña es incorrecta, por favor inténtelo de nuevo.',
      buttons: ['Vale']
    });
    if(!this.password){
      return await alert.present();
    }
    this.usuarioService.getUsuario(this.usuarioService.username).subscribe(
      async data => {
        if(data){
          this.closeModal();
          if(this.password == data.contrasena){

            let editarperfilModal: HTMLIonModalElement = await this.modalCtrl.create({
              component: ActualizarPerfilPage
        });

        await editarperfilModal.present();

          } else{
            return await ContrasenaIncorrecta.present();
          }
        } else{
          return await ContrasenaIncorrecta.present();
        }
      },
      async error => {
        const toast = await this.toastCtrl.create({
          message: 'Se produjo el siguiente error al consultar los datos: ' + error,
          duration: 4500
        });
        toast.present();
        console.error(error);
      }
    );
  }

  async closeModal() {
      await this.modalCtrl.dismiss();
  }


}
