import { PeliculasService } from './services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( private pliculasService: PeliculasService ){
    this.pliculasService.getCartelera()
      .subscribe( res => {
        console.log( res );
      })
  }
}
