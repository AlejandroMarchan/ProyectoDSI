import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage {
  public usuario: string = '';
  public password: string = '';
  public password2: string = '';
  public registrado = false;

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
    if(!this.usuario || !this.password || !this.password2){
      return await alert.present();
    }
    if(this.password!=this.password2){
      return await alert2.present();
    }
    this.usuarioService.getUsuario(this.usuario).subscribe(
      async data => {
        if(!data){
          this.registrado = true;
          let usuario: Usuario = {
            contrasena: this.password,
            nombre: '',
            apellidos: '',
            bonos: '',
            telefono: null,
            tipo: 'comun'
          };
          this.usuarioService.addUsuario(usuario, this.usuario);
          this.usuarioService.username = this.usuario;
          this.usuarioService.logged = true;
          this.usuarioService.tipo = data.tipo;
          const toast = await this.toastCtrl.create({
            message: this.usuario + ', su cuenta ha sido creada correctamente',
            duration: 2500
          });
          toast.present();
          this.closeModal();
        }else if(!this.registrado){
          const usuarioExiste = await this.alertCtrl.create({
            header: 'Error Nombre Usuario',
            message: 'El nombre de usuario que introdujo pertenece a otro usuario de la plataforma, por favor elija uno diferente.',
            buttons: ['Vale']
          });
          return await usuarioExiste.present();
        }
      },
      async error => {
        const toast = await this.toastCtrl.create({
          message: 'Se produjo el siguiente error al registrarse: ' + error,
          duration: 4500
        });
        toast.present();
        return true;
      }
    );
  }

  async closeModal() {
      await this.modalCtrl.dismiss();
    }

}
