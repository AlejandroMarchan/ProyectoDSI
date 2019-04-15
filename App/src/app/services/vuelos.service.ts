import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  // Almacena los vuelos disponibles
  public vuelos: {
    idVuelo: number,
    fechaSalida: Date,
    precio: number,
    reservado: boolean,
    origen: {
      ciudad: string,
      bandera: string
    },
    destino: {
      ciudad: string,
      bandera: string
    }
  } [] = [];
  // [
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 700,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'Perú'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 16, 21, 0),
  //     precio: 500,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'China'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 30,
  //     reservado: false,
  //     origen: 'Japón',
  //     destino: 'Australia'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 30,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'Perú'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 30,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'Perú'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 30,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'Perú'
  //   },
  //   {
  //     fechaSalida: new Date(2019, 2, 11, 21, 0),
  //     precio: 30,
  //     reservado: false,
  //     origen: 'Madrid',
  //     destino: 'Perú'
  //   }
  // ];

  constructor(public http: Http) {
   }

   loadPaises() {
      let headers = new Headers()
      headers.append("Content-Type", 'application/json');
      let url = "https://restcountries.eu/rest/v2/all?fields=name;capital;flag";
      return this.http.get(url, {headers})
                  .pipe(map(res=> {
                    return res.json();
                  }));
   }

   generateFligths(paises){
     let hoy = new Date();
     var diasMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);
     let maxPrice = 1200;
     let minPrice = 300;
     let j = 0;
     // console.log('hoy.getMonth() = ' + hoy.getMonth());
     // console.log('hoy.getDate() = ' + hoy.getDate());
     // console.log('diasMes.getDate() = ' + diasMes.getDate());
     for(let i = 0; i < 20; i++){
       let mes: number = Math.floor(Math.random() * (12 - hoy.getMonth())) + hoy.getMonth();
       let dia: number = Math.floor(Math.random() * (diasMes.getDate() + 1 - 1)) + 1;
       if(mes == hoy.getMonth()){
         dia = Math.floor(Math.random() * (diasMes.getDate() - hoy.getDate())) + hoy.getDate();
       }
       j = Math.floor(Math.random() * paises.length);
       let origen: string = paises[j].capital;
       let aux = Math.floor(Math.random() * paises.length);
       while(aux == j ){
         aux = Math.floor(Math.random() * paises.length);
       }
       let destino: string = paises[aux].capital;
       if(origen == '') origen = paises[1].capital;
       if(destino == '') destino = paises[0].capital;
       // console.log(mes);
       // console.log(dia);
       let vuelo: {
         idVuelo: number,
         fechaSalida: Date,
         precio: number,
         reservado: boolean,
         origen: {
           ciudad: string,
           bandera: string
         },
         destino: {
           ciudad: string,
           bandera: string
         }
       } = {
         idVuelo: i,
         fechaSalida: new Date(2019, mes, dia, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)),
         precio: Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice,
         reservado: false,
         origen: {
           ciudad: origen,
           bandera: paises[j].flag
         },
         destino: {
           ciudad: destino,
           bandera: paises[aux].flag
         }
       };
       this.vuelos.push(vuelo);
     }
   }

}
