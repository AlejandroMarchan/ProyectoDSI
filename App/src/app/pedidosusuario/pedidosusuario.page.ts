import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { CartaService } from '../services/carta.service';
import { Carta } from '../interfaces/carta';
import { PedidosService } from '../services/pedidos.service';
import { UsuarioService } from '../services/usuario.service';
import { Pedidos } from '../interfaces/pedidos';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-pedidosusuario',
  templateUrl: './pedidosusuario.page.html',
  styleUrls: ['./pedidosusuario.page.scss'],
})
export class PedidosusuarioPage{
  public art1: string = '';
  public art2: string = '';
  public art3: string = '';
  public art4: string = '';
  public art5: string = '';
  public art6: string = '';
  perfil: Usuario

  constructor(public pedidoService: PedidosService, public modalCtrl: ModalController, public alertCtrl: AlertController, public toastCtrl: ToastController, public usuarioService: UsuarioService, perfil: Usuario) { }
  
  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  async actualizar(){
    const alert = await this.alertCtrl.create({
      header: 'Pedido incompleto',
      message: 'Debe pedir como minimo un articulo',
      buttons: ['Vale']
    });
    if(!this.art1){
      return await alert.present();
    }
    let pedidos: Pedidos = {
      num_pedido: 1,//que sea incremental
      articulo1: this.art1,
      articulo2: this.art2,
      articulo3:this.art3,
      articulo4:this.art3,
      articulo5:this.art3,
      articulo6:this.art3,
      usuario: this.perfil.username,
    };
   
    this.pedidoService.addPedidos(pedidos, '1');//que sea incremental
          const toast = await this.toastCtrl.create({
            message:' Su pedido ha sido aceptado y esta en preparación',
            duration: 2500
          });
          toast.present();
          this.closeModal();
      async error => {
        const toast = await this.toastCtrl.create({
          message: 'Se produjo el siguiente error al realizar el pedido: ' + error,
          duration: 4500
        });
        toast.present();
        return true;
      }
    }
    async cogerusuario() {  
      this.usuarioService.getUsuario(this.usuarioService.username).subscribe( async data => {
        this.perfil = data;
      });
    }
}

  