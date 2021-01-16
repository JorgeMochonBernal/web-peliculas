import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasServices } from './../../services/peliculas.service';
import { Cast } from './../../interfaces/credits';
import { MovieResponse } from './../../interfaces/movieData';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast: Cast[] = [];

   constructor( private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasServices,
                private location: Location,
                private router: Router ) { }

   ngOnInit(): void {

     const { id } = this.activatedRoute.snapshot.params;

     combineLatest([

       this.peliculasService.getPeliculaDetalle( id ),
       this.peliculasService.getCast( id )

     ]).subscribe( ( [pelicula, cast] ) => {

       if ( !pelicula ) {
         this.router.navigateByUrl('/home');
         return;
       }

       this.pelicula = pelicula;
       this.cast = cast.filter( actor => actor.profile_path !== null );
     });
   }

   onRegresar() {
     this.location.back();
   }
 }
