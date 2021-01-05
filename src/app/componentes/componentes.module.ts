import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PeliculasServices } from './../services/peliculas.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      NavbarComponent
    ],
  })

export class ComponentesModule {
  constructor( private _peliServices:PeliculasServices) {
    this._peliServices.getCartelera()
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
