import { Component, OnInit,HostListener } from '@angular/core';
import { PeliculasServices } from './../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
    onScroll() {
      const pos = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight;

      if(pos > max ) {
        this._peliService.getCartelera().subscribe(resp => {
        this.movies.push(...resp.results);
        })
      }
    }

  constructor(private _peliService:PeliculasServices) { }

  ngOnInit(): void {
    this._peliService.getCartelera()
      .subscribe( resp => {
        this.movies = resp.results;
        this.moviesSlideshow = resp.results;
      });
  }

}
