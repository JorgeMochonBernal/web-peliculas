import { Component, OnInit } from '@angular/core';
import { PeliculasServices } from './../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private _peliService:PeliculasServices) { }

  ngOnInit(): void {
    this._peliService.getCartelera()
      .subscribe( resp => {
        //console.log(resp.results);
        this.movies = resp.results;
      });
  }

}
