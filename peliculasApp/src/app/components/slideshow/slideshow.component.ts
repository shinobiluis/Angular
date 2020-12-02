import { Movie } from './../../interfaces/cartelera-response';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public mySwiper: Swiper;
  constructor() { }

  ngAfterViewInit(): void{
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    })
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }
  onSlidePrevius(){
    this.mySwiper.slidePrev();
  }
}
