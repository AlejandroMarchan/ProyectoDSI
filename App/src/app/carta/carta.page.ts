import { Component, OnInit } from '@angular/core';
import { Carta } from '../interfaces/carta';
import { CartaService } from '../services/carta.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UsuarioService } from '../services/usuario.service';
import { AnadirPage } from '../anadir/anadir.page';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {
 
  carta: Carta[];
  public editar: boolean = false;
  constructor(private cartaService: CartaService, public toastCtrl: ToastController, public modalCtrl: ModalController, public usuarioService: UsuarioService, public alertCtrl: AlertController){}

 
  async ngOnInit() {
    this.cartaService.getCarta().subscribe( async data => {
      this.carta = data;
    });
  }
  async abrirLogin(){
    let loginModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: LoginPage
    });
    await loginModal.present();
  }
  async EditarCarta(){
    this.cartaService.editar=true;
  }
  async Borrar(item){
    this.cartaService.removeCarta(item);
  }
  async Anadir(){
    let anadirModal: HTMLIonModalElement = await this.modalCtrl.create({
          component: AnadirPage
    });
    await anadirModal.present();
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