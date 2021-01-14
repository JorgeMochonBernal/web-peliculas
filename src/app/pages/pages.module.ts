import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from './../componentes/componentes.module'
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PipesModule } from './../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    PipesModule,
    RatingModule
  ],
})

export class PagesModule { }
