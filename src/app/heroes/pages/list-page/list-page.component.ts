import { Component, inject, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent implements OnInit {

  private heroeSvc = inject(HeroesService);
  public heroes: Hero[] = [];

  constructor(private heroeService: HeroesService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroeSvc.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
