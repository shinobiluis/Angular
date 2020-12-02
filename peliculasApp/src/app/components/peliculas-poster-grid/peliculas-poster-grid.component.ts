import { Movie } from './../../interfaces/cartelera-response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }

}
