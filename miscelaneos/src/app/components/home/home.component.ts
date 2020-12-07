import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    componente 
    <app-ng-style></app-ng-style>  
    css a un componente 
    <app-css></app-css> 
    <app-clases></app-clases> 
    <p [appResaltado]="'orange'">
      hola mundo
    </p> 
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
