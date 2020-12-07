import Swiper from 'swiper';
import { Cast } from './../../interfaces/credits-response';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cast-slides-show',
  templateUrl: './cast-slides-show.component.html',
  styleUrls: ['./cast-slides-show.component.css']
})
export class CastSlidesShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast)
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
