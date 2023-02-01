import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';


// MODULES
import { FormsModule } from '@angular/forms';


// esto es para poder crear un ngmodel para obtener los datos del formulario

// providers
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';


// permite decodificar y verificar los token desde el servidor



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FooterComponent,
    HeaderComponent,

    PokeTableComponent,
    PokeDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
{provide: JWT_OPTIONS, useValue:JWT_OPTIONS},
JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
