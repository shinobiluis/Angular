import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.models'; // importamos
import Swal from 'sweetalert2'; // importamos sweetaler2

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // usamos el modelo de heroes
  heroes: HeroeModel[] = [];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( resp  => {
        console.log(resp);
        this.heroes = resp;
      })
  }

  borrarHeroe( heroe: HeroeModel, i: number ){
    Swal.fire({
      title: '¿Esta seguro?',
      text: `Esta seguro que desa borrar a : ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if(resp.value){
        this.heroes.splice(i, 1);
        this.heroesService.borrarHeroe( heroe.id )
          .subscribe();
      }
    })
    
  }

}
