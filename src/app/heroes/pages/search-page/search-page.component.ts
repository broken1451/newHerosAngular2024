import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent  implements OnInit{

    public heroes: Hero[] = [];
    public searchInput = new FormControl<string>('');
    public selectedHero: Hero | undefined;
    // filteredOptions!: Observable<Hero[]>;

    constructor(private heroSvc: HeroesService) { }

    ngOnInit() {
      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map((value) => {
      //     const name = typeof value === 'string' ? value : value;
      //     this.heroSvc.getSuggestions(value as string).subscribe(heroes => {
      //       this.heroes = heroes;
      //       console.log(this.heroes )
      //     });
      //     return name ? this._filter(name as string) : this.heroes.slice();
      //   }),
      // );
    }

    // displayFn(user: Hero): string {
    //   return user && user.superhero ? user.superhero : '';
    // }

    // private _filter(name: string): Hero[] {
    //   const filterValue = name.toLowerCase();
    //   return this.heroes.filter(option => option.superhero.includes(filterValue));
    // }

    searchHero() {
      const value = this.searchInput.value || '';
      if (value.trim().length == 0) {
        return;
      }
      this.heroSvc.getSuggestions(value).subscribe(heroes => {
        this.heroes = heroes;
      });
    }

    onSelectedOption(event: MatAutocompleteSelectedEvent) {
      if (!event.option.value) {
        this.selectedHero = undefined;
        return;
      }

      const hero: Hero = event.option.value;
      this.searchInput.setValue(hero.superhero);
      this.selectedHero = hero;
    }
  }



