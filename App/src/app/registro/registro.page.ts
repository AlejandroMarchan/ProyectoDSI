import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  public usuario: string = '';
  public password: string = '';
  public password2: string = '';

  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }
  async registro(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para iniciar sesión.',
      buttons: ['Vale']
    });
    const alert2 = await this.alertCtrl.create({
      header: 'Error al introducir contraseña',
      message: 'La segunda contraseña y la primera no coinciden.',
      buttons: ['Vale']
    });
    if(!this.usuarioService || !this.password || !this.password2){
      return await alert.present();
    }
    if(this.password!=this.password2){
      return await alert2.present();
    }
    this.usuarioService.usuario.username = this.usuario;
    this.usuarioService.usuario.contrasena = this.password;
    this.usuarioService.logged = true;
    const toast = await this.toastCtrl.create({
      message: this.usuario + ', su cuenta ha sido creada correctamente',
      duration: 2500
    });
    toast.present();
    this.closeModal();
  }

  async closeModal() {
      await this.modalCtrl.dismiss();
    }

}
