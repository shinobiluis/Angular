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
      'Authorization': 'Bearer BQC8-PJcH_qf__AdrLuffC02YEwwTIY36BwmN-DAPUH1fEjm5krUL-spSxNsPjOUnulyUpUtKH5ig6NJiXw'
    });
    return this.http.get(url, { headers })
  }
  
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data => {
              return data['albums'].items
            }))
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe( map( data => {
              return data['artists'].items
            }))    
  }
  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }
  getTopTracks( id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map ( data => {
          return data['tracks'];
      }));
  }
}
