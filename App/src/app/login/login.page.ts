import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public usuario: string = '';
  public password: string = '';

  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) {  }

  async login(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para iniciar sesión.',
      buttons: ['Vale']
    });
    const loginIncorrecto = await this.alertCtrl.create({
      header: 'Login erróneo',
      message: 'El nombre de usuario o la contraseña son incorrectos, por favor inténtelo de nuevo.',
      buttons: ['Vale']
    });
    if(!this.usuario || !this.password){
      return await alert.present();
    }
    this.usuarioService.getUsuario(this.usuario).subscribe(
      async data => {
        if(data){
          if(this.password == data.contrasena){
            const toast = await this.toastCtrl.create({
              message: '¡Bienvenido ' + this.usuario + '!',
              duration: 2500
            });
            toast.present();
            this.usuarioService.logged = true;
            this.usuarioService.username = this.usuario;
            this.usuarioService.tipo = data.tipo;
            this.closeModal();
          } else{
            return await loginIncorrecto.present();
          }
        } else{
          return await loginIncorrecto.present();
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


  async abrirRegistro(){
    await this.modalCtrl.dismiss();
    let registroModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: RegistroPage
    });
    await registroModal.present();
  }

}
