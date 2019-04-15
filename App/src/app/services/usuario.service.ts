import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // Almacena los datos del usaurio
  public usuario:{
    username: string,
    contrasena: string,
    nombre: string,
    apellidos: string,
    pasaporte: string,
    telefono: number
  } = {
    username: '',
    contrasena: '',
    nombre: '',
    apellidos: '',
    pasaporte: '',
    telefono: null
  };

  // Indica si el usuario esta logado
  logged: boolean = false;

  constructor() { }
}
