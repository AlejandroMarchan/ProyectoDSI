import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  private usuarios: Observable<Usuario[]>;

  public logged: boolean = false;

  public username: string = '';

  public tipo: string = '';

  public dinero:number = 0;

  constructor(db: AngularFirestore) {
    this.usuariosCollection = db.collection<Usuario>('usuarios');

    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(id: string) {
    return this.usuariosCollection.doc<Usuario>(id).valueChanges();
  }

  updateUsuario(usuario: Usuario, id: string) {
    return this.usuariosCollection.doc(id).update(usuario);
  }

  addUsuario(usuario: Usuario, id: string) {
    return this.usuariosCollection.doc(id).set(usuario);
  }

  removeUsuario(id: string) {
    return this.usuariosCollection.doc(id).delete();
  }
}
