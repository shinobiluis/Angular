import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 
    console.log("directiva llamada")
    console.log(el)
    el.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'red' )
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null )
  }

  private resaltar( color:string ){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
