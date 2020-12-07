import { Cast } from './../../interfaces/credits-response';
import { MovieResponse } from './../../interfaces/movie-response';
import { PeliculasService } from './../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula; MovieResponse;
  public cast: Cast[] = [];

  constructor( private activateRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log( movie );
      if ( !movie ) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie;
    });

    this.peliculasService.getCast( id ).subscribe( cast => {
      this.cast = cast.filter( actor => actor.profile_path !== null )
    })
  }

  onRegresar(){
    this.location.back();
  }

}
