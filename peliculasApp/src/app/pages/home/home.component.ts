import { Movie } from './../../interfaces/cartelera-response';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor( private pliculasService: PeliculasService ){}

  ngOnInit(): void {
    this.pliculasService.getCartelera()
      .subscribe( res => {
        this.movies = res.results;
      });
  }

}
