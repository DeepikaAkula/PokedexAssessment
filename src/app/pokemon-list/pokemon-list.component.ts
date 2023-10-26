import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../Services/pokemon.service';
import { Subscription, concat } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  loading: boolean = false;
  constructor(private pokemonService: PokemonService) { }
  get pokemons(): any[] {
    const poke = this.pokemonService.pokemons;
    console.log(poke);
    return poke;
  }
   ngOnInit(): void {
    if (!this.pokemons.length) {
      this.loadMore();
    }
  }
  loadMore(): void {
    this.loading = true;
    this.pokemonService.getNext().subscribe(response => {
      console.log(response);
      this.pokemonService.next = response.next;
      const details = response.results.map((i: any) => this.pokemonService.get(i.name));
      concat(...details).subscribe((response: any) => {
        this.pokemonService.pokemons.push(response);
      });
    }, error => console.log('Error Occurred:', error), () => this.loading = false);
  }

}
