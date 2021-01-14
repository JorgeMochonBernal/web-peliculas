import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PeliculasResponse,Movie } from './../interfaces/cartelera';
import { MovieData } from '../interfaces/movieData';

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

  resetCarteleraPage() {
    this.pageCartelera = 1;
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

  buscarPeli(texto:string):Observable <Movie[]> {
    const params = {...this.params, page:'1', query: texto };
    return this._httpClient.get<PeliculasResponse>(`${this.baseURL}/search/movie`, {
      params
    }).pipe(
      map(resp => resp.results)
    )
  }

  getPeliculaDetalle( id: string ) {

     return this._httpClient.get<MovieData>(`${ this.baseUrl }/movie/${ id }`, {
       params: this.params
     });
   }
 }
