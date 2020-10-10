import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("servicio listo")
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCzjzo4I0sgpQX5Mfdl-Rk8x2ltmwml-B4EgBQN57b4VMGJV5tZXswIOZ4t5RLyPm2WyOVyLaYrRH1k4lU'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers
    })
      .subscribe( data => {
        console.log(data)
      })
  }
}
