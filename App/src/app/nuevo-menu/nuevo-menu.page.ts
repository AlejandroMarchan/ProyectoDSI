import { Component } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { MenuService } from '../services/menu.service';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-nuevo-menu',
  templateUrl: './nuevo-menu.page.html',
  styleUrls: ['./nuevo-menu.page.scss'],
})
export class NuevoMenuPage{
  public prim1: string = '';
  public prim2: string = '';
  public prim3: string = '';
  public seg1: string = '';
  public seg2: string = '';
  public seg3: string = '';
  public pos1: string = '';
  public pos2: string = '';
  public pos3: string = '';

  constructor(public menuService: MenuService, public modalCtrl: ModalController, public alertCtrl: AlertController, public toastCtrl: ToastController) { }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  async actualizar(){
    const alert = await this.alertCtrl.create({
      header: 'Campo vacío',
      message: 'Por favor, rellene todos los campos para cambiar el menu.',
      buttons: ['Vale']
    });
    if(!this.prim1 || !this.prim2 || !this.prim3 || !this.seg1 || !this.seg2 || !this.seg3 || !this.pos1 || !this.pos2 || !this.pos3){
      return await alert.present();
    }
    let menu: Menu = {
      nombre: 'primero',
      plato1: this.prim1,
      plato2: this.prim2,
      plato3:this.prim3
    };
    let menu2: Menu = {
      nombre: 'segundo',
      plato1: this.seg1,
      plato2: this.seg2,
      plato3:this.seg3
    };
    let menu3: Menu = {
      nombre: 'postre',
      plato1: this.pos1,
      plato2: this.pos2,
      plato3:this.pos3
    };
    this.menuService.updateCarta(menu, '1');
    this.menuService.updateCarta(menu2, '2');
    this.menuService.updateCarta(menu3, '3');
          const toast = await this.toastCtrl.create({
            message:' su menu ha sido actualizado correctamente',
            duration: 2500
          });
          toast.present();
          this.closeModal();
      async error => {
        const toast = await this.toastCtrl.create({
          message: 'Se produjo el siguiente error al actualizar el menu: ' + error,
          duration: 4500
        });
        toast.present();
        return true;
      }
    }
}
