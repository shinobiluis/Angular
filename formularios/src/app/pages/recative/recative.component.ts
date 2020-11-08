import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recative',
  templateUrl: './recative.component.html',
  styleUrls: ['./recative.component.css']
})
export class RecativeComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:['', [ Validators.required, Validators.minLength(4) ] ],
      apellido:['', Validators.required],
      correo: ['', [ Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required ] ]
    })
  }

  guardar(){
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
    console.log(this.forma)
  }
}
