import { Component, OnInit } from '@angular/core';
import { ValidadoresService }  from '../../services/validadores.service'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recative',
  templateUrl: './recative.component.html',
  styleUrls: ['./recative.component.css']
})
export class RecativeComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder, private validadores: ValidadoresService ) { 
    this.crearFormulario();
    this.cargarDataAlFormulario();
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
  get usuarioNoValido(){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }
  get distritoNoValido(){
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }
  get ciudadNoValido(){
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }
  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  get pass1NoValido(){
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }
  get pass2NoValido(){
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return ( pass1 === pass2 ) ? false : true;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:['', [ Validators.required, Validators.minLength(4) ] ],
      apellido:['', [Validators.required, this.validadores.noHerrera ]],
      correo: ['', [ Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required ] ],
      usuario: [ '', , this.validadores.existeUsuario ],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.fb.group({
        distrito: ['', Validators.required ],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([])   
    },{
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  cargarDataAlFormulario(){
    // this.forma.setValue({
    this.forma.reset({
      nombre: "Luis",
      apellido: "Alcantara",
      correo: "geek@gmail.com",
      pass1: '123',
      pass2: '123',
      direccion: {
        distrito: "tacuba",
        ciudad: "df"
      }
    })

  }

  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control('', Validators.required))
  }
  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i)
  }

  guardar(){
    if( this.forma.invalid ){
      return Object.values( this.forma.controls ).forEach( control => {
        if (control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAllAsTouched() );
        }else{
          control.markAsTouched();
        }
      });
    }
    console.log(this.forma)
    this.forma.reset();
  }

  
}
