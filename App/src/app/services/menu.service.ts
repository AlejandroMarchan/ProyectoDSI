import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCollection: AngularFirestoreCollection<Menu>;

  private menu: Observable<Menu[]>;
  public editar: boolean = false;
  public menuActual: Menu[];

  constructor(db: AngularFirestore) {
    this.menuCollection = db.collection<Menu>('menu');

    this.menu = this.menuCollection.snapshotChanges().pipe(
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
    return this.menu;
  }

  getComida(id) {
    return this.menuCollection.doc<Menu>(id).valueChanges();
  }

  updateCarta(menu: Menu, id: string) {
    return this.menuCollection.doc(id).update(menu);
  }

  addCarta(menu: Menu, id: string) {
    return this.menuCollection.doc(id).set(menu);
  }

  removeCarta(id: string) {
    return this.menuCollection.doc(id).delete();
  }
}
