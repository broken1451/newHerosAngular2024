import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private heroesService = inject(HeroesService);
  public hero!: Hero;

  constructor() { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    ).subscribe((hero) => {
      if (!hero) {
        // redirect to error page
        this.router.navigateByUrl('/heroes/list');
        return
      }
      this.hero = hero;
    });
  }


  goBack(){
    this.router.navigateByUrl('/heroes/list');
  }
}
