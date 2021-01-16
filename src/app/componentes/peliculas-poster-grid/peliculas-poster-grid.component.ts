import { Component, OnInit,Input } from '@angular/core';
import { Movie, } from './../../interfaces/cartelera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies:Movie[];

  constructor(private _router:Router) {}

  ngOnInit(): void {}

  onClick(movie: Movie) {
    this._router.navigate(['/pelicula',movie.id]);
  }
}
