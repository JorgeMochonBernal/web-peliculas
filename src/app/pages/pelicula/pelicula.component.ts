import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasServices } from './../../services/peliculas.service';
import { MovieData } from './../../interfaces/movieData';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieData;

  constructor(private _activatedRoute:ActivatedRoute,
              private _peliServices: PeliculasServices) {}

  ngOnInit(): void {
    const {id} = this._activatedRoute.snapshot.params.id;

    this._peliServices.getPeliculaDetalle(id).subscribe(movie => {
      console.log(movie);
      this.pelicula = movie;
    })
  }

}
