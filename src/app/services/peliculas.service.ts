import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PeliculasResponse } from './../interfaces/cartelera';

@Injectable({
  providedIn: 'root'
})

export class PeliculasServices {

  private baseURL:string = 'https://api.themoviedb.org/3';
  private pageCartelera = 1;
  public cargando: boolean = false;

  constructor( private _httpClient:HttpClient ) { }

  get params() {
    return {
      api_key: '09485747367603a5b81841099c49e49e',
      language: 'es-ES',
      page: this.pageCartelera.toString()

    }
  }

  getCartelera():Observable<PeliculasResponse> {
    this.cargando = true;
    return this._httpClient.get<PeliculasResponse>(`${this.baseURL}/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap( () => {
        this.pageCartelera += 1;
        this.cargando = false;
      })
    );

  }
}

//https://api.themoviedb.org/3/movie/now_playing?api_key=09485747367603a5b81841099c49e49e&language=en-ES&page=1
