import { Injectable } from '@angular/core';
import { Pedidos } from '../interfaces/pedidos';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private pedidosCollection: AngularFirestoreCollection<Pedidos>;

  private pedidos: Observable<Pedidos[]>;
  public finpedido: boolean = false;

  constructor(db: AngularFirestore) {
    this.pedidosCollection = db.collection<Pedidos>('pedidos');

    this.pedidos = this.pedidosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getPedidos() {
    return this.pedidos;
  }

  getidPedidos(id) {
    return this.pedidosCollection.doc<Pedidos>(id).valueChanges();
  }

  updatePedidos(pedidos: Pedidos, id: string) {
    return this.pedidosCollection.doc(id).update(pedidos);
  }

  addPedidos(pedidos: Pedidos, id: string) {
    return this.pedidosCollection.doc(id).set(pedidos);
  }

  removePedidos(id: string) {
    return this.pedidosCollection.doc(id).delete();
  }
}
