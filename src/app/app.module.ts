import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PagesModule } from './pages/pages.module';
import { ComponentesModule } from './componentes/componentes.module';

import { PeliculasServices } from './services/peliculas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentesModule,
    PagesModule,
  ],
  providers: [
    PeliculasServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
