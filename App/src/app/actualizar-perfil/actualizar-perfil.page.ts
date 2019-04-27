import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit{
perfil: Usuario
username: string = '';
password: string = '';
password2: string = '';
nombre: string = '';
apellidos: string = '';
telefono: number = null;
  constructor(public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController, public toastCtrl: ToastController) { }
  async ngOnInit() {  
    this.usuarioService.getUsuario(this.usuarioService.username).subscribe( async data => {
      this.perfil = data;
    });
  }
  async actualizar(){
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
    if(!this.username || !this.password || !this.password2){
      return await alert.present();
    }
    if(this.password!=this.password2){
      return await alert2.present();
    }
    this.usuarioService.getUsuario(this.username).subscribe(
      async data => {
          let usuario: Usuario = { 
            username : this.username,
            contrasena: this.password,
            nombre: this.nombre,
            apellidos: this.apellidos,
            bonos: '',
            telefono: this.telefono,
            tipo: 'comun'
          };
          this.usuarioService.updateUsuario(usuario, this.username);
          const toast = await this.toastCtrl.create({
            message: this.username + ', su cuenta ha sido actualizada correctamente',
            duration: 2500
          });
          toast.present();
          this.closeModal();
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

