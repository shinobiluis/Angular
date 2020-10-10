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
      'Authorization': 'Bearer BQDgO167HD9WVDYXBGZWdtiJLAo95hOCnBwKErwgpPWkTSO8cqrt8T9_uJw1FICLfpJT0d7IDq3759Mg_MY'
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
