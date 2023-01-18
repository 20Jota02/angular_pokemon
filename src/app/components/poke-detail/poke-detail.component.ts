import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent {

  pokemon: any = '';
  pokemonTipe:[];
  pokemonImg:'';



  constructor(private  pokemonService: PokemonService, private activatedRouter: ActivatedRoute){


    this.activatedRouter.params.subscribe(
      params =>{
        this.getPokemon(params['id']);
      }
    );
  }

  ngOnInit(): void {

    }



  getPokemon(id: any){
this.pokemonService.getPokemons(id).subscribe(
  res =>{
this.pokemon = res;
this.pokemonImg = this.pokemon.sprites.front_default;
this.pokemonTipe = res.types[0].type.name;
  },
  err=>{
console.log(err);
  }
)
  }

  
}
