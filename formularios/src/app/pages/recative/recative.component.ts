import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:[''],
      apellido:[''],
      correo: ['']
    })
  }

  guardar(){
    console.log(this.forma)
  }
}
