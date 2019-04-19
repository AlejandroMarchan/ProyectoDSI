import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { CartaService } from '../services/carta.service';
import { Carta } from '../interfaces/carta';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage{
  public comida: string = '';
  public precio: number =null;

  constructor(public cartaService: CartaService, public modalCtrl: ModalController, public alertCtrl: AlertController, public toastCtrl: ToastController) { }
  
  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  async anadir(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para iniciar sesión.',
      buttons: ['Vale']
    });
    if(!this.comida || !this.precio){
      return await alert.present();
    }
    let noExiste = true;
    this.cartaService.getComida(this.comida).subscribe(
      async data => {
        console.log(data);
        if(data) noExiste = false;
        if(noExiste){
          let carta: Carta = {
            comida: this.comida,
            precio: this.precio
          };
          this.cartaService.addCarta(carta, this.comida);
          this.cartaService.editar = false;
          const toast = await this.toastCtrl.create({
            message: this.comida + ', su comida ha sido añadida correctamente',
            duration: 2500
          });
          toast.present();
          this.closeModal();
        }else{
          const comidaExiste = await this.alertCtrl.create({
            header: 'Error Nombre Comida',
            message: 'El nombre de comida que introdujo pertenece a otro comida de la carta, por favor elija uno diferente.',
            buttons: ['Vale']
          });
          return await comidaExiste.present();
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
}
