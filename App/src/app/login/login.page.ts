import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public usuario: string = '';
  public password: string = '';

  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  async login(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para iniciar sesión.',
      buttons: ['Vale']
    });
    if(!this.usuario || !this.password){
      return await alert.present();
    }
    this.usuarioService.usuario.username = this.usuario;
    this.usuarioService.usuario.contrasena = this.password;
    this.usuarioService.logged = true;
    const toast = await this.toastCtrl.create({
      message: '¡Bienvenido ' + this.usuario + '!',
      duration: 2500
    });
    toast.present();
    this.closeModal();
  }

  async closeModal() {
      await this.modalCtrl.dismiss();
    }

}
