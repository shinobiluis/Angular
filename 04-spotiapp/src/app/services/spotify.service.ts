import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("servicio listo")
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA19MlqjoPD2wvxhcBwjA7X0a8ckkniSh8M_olP0SucEFZmCTEkUznP3S86xkjZ8Nwa9QEzisyc_Gp4dqs'
    });
    return this.http.get(url, { headers })
  }
  
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data => {
              return data['albums'].items
            }))
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe( map( data => {
              return data['artists'].items
            }))    
  }
}
