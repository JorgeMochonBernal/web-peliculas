import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PagesModule } from './pages/pages.module';
import { ComponentesModule } from './componentes/componentes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    ComponentesModule,
    PagesModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
