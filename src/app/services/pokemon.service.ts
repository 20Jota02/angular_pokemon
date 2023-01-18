import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) { }

getPokemons(index:any){
  return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
}


}



// este es nuestro servicio para consumir nuestro empoy

