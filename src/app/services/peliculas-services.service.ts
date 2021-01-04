import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliculasServicesService {

  constructor( private _httpClient:HttpClient ) { }

  getCartelera():Observable<PeliculasServicesService> {
    return this._httpClient.get<PeliculasServicesService>('https://api.themoviedb.org/3/movie/now_playing?api_key=09485747367603a5b81841099c49e49e&language=en-ES&page=1');
  }
}
