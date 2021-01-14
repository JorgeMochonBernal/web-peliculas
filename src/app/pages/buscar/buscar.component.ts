import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasServices } from './../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto: string = "";
  public movies: Movie[];

  constructor( private _activatedRoute:ActivatedRoute,
               private _peliService:PeliculasServices) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.texto = params.texto;
      this._peliService.buscarPeli(params.texto).subscribe(movies => {
        this.movies = movies;
    });
  });
  }
}
