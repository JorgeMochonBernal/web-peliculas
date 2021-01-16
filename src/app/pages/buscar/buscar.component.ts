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

  public texto: string = '';
  public movies: Movie[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasServices) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.texto = params.texto;

      this.peliculasService.buscarPeliculas( params.texto ).subscribe( movies => {
        this.movies = movies;
      })
    });
  }
}
