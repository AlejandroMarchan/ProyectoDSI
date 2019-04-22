import { Injectable } from '@angular/core';
import { Carta } from '../interfaces/carta';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  private cartaCollection: AngularFirestoreCollection<Carta>;

  private carta: Observable<Carta[]>;
  public editar: boolean = false;

  constructor(db: AngularFirestore) {
    this.cartaCollection = db.collection<Carta>('carta');

    this.carta = this.cartaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCarta() {
    return this.carta;
  }

  getComida(id) {
    return this.cartaCollection.doc<Carta>(id).valueChanges();
  }

  updateCarta(carta: Carta, id: string) {
    return this.cartaCollection.doc(id).update(carta);
  }

  addCarta(carta: Carta, id: string) {
    return this.cartaCollection.doc(id).set(carta);
  }

  removeCarta(id: string) {
    return this.cartaCollection.doc(id).delete();
  }
}
