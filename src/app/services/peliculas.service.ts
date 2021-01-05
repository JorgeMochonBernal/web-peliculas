import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse } from './../interfaces/cartelera';

@Injectable({
  providedIn: 'root'
})

export class PeliculasServices {

  constructor( private _httpClient:HttpClient ) { }

  getCartelera():Observable<PeliculasResponse> {
    return this._httpClient.get<PeliculasResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=09485747367603a5b81841099c49e49e&language=en-ES&page=1');
  }
}
