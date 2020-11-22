import { HttpClient } from '@angular/common/http'; // importamos
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.models'; // importamos
import { map } from 'rxjs/operators'; // importamos

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  // creamos variable privada
  private url = 'https://crud-219d8.firebaseio.com';

  // usamos el httpClient
  constructor( private http: HttpClient ) { }

  // post para crear un registro
  crearHeroe( heroe: HeroeModel ){
    // hacemos el post pasando el modelo de heroe que manda el heroe.component.ts
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe( // controlamos la respuesta del servicio
        map((resp: any) => {
          heroe.id = resp.name; // agreamos la respuesta al id
          return heroe; // retornamos el heroe
        })
      )
  }

  actualizarHeroe( heroe: HeroeModel ){
    // creamos un hero temporal para eliminar el id
    const heroeTemp = {
      ...heroe
    };
    // eliminamos el id de la variable
    delete heroeTemp.id;
    // mandamos el put
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }
}
