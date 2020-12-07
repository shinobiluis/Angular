import { PipesModule } from './../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { CastSlidesShowComponent } from './cast-slides-show/cast-slides-show.component';


@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlidesShowComponent],
  exports:[
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    RatingModule,
    CastSlidesShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
