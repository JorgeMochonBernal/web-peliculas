import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasResponse } from './../interfaces/cartelera';

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ]
  })

export class ComponentesModule {
  constructor( private _peliServices) {
    this._peliServices.getCartelera()
      .subscribe((resp:PeliculasResponse) => {
        console.log(resp);
      });
  }
}
