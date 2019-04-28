import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { Menu } from '../interfaces/menu';
import { MenuService } from '../services/menu.service';
import { NuevoMenuPage } from '../nuevo-menu/nuevo-menu.page';

@Component({
  selector: 'app-menu-comida',
  templateUrl: './menu-comida.page.html',
  styleUrls: ['./menu-comida.page.scss'],
})
export class MenuComidaPage {
 
  menu: Menu[];
  public editar: boolean = false;

  
  constructor(private menuService: MenuService, public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){}

 
  async ionViewWillEnter() {
    this.menuService.getCarta().subscribe( async data => {
      this.menu = data;
    });
  }
  async abrirLogin(){
    let loginModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: LoginPage
    });
    await loginModal.present();
  }
  async EditarMenu(){
    let nuevomenuModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: NuevoMenuPage
    });
    await nuevomenuModal.present();
  }


  async cerrarSesion(){
    this.menuService.editar==false;
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