import { HeroesService } from '../../services/heroes.service'; // importamos
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.models' // importamos
import { NgForm } from '@angular/forms'; // importamos

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  // usamos el servicio de heroesService
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){
    if ( form.invalid){
      console.log('Formulario no valido');
      return;
    }
    console.log(form);
    console.log(this.heroe)
    // usamos el servicio de crear heroe pasando el modelo
    this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => { // nos subcribimos a la respuesta
        console.log(resp); // vemos la respuesta
      });
  }
}
