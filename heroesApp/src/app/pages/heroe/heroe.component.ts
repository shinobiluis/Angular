import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'; // importamos
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.models' // importamos
import { NgForm } from '@angular/forms'; // importamos

import Swal from 'sweetalert2'; // importamos sweetaler2

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  // usamos el servicio de heroesService
  constructor( private heroesService: HeroesService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if( id !== 'nuevo'){
      this.heroesService.getHeroe( id )
        .subscribe( (resp: HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
          console.log(resp)
        })
    }
  }

  guardar( form: NgForm ){
    if ( form.invalid){
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    console.log(form);
    console.log(this.heroe)
    if (this.heroe.id){ // si el id existe actualizamos
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    }else{
      // usamos el servicio de crear heroe pasando el modelo
      peticion = this.heroesService.crearHeroe( this.heroe );
    }
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      })
    })
  }
}
