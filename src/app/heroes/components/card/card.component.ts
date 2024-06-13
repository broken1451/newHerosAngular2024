import { Component, inject, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  
  @Input({required: true}) heroe!: Hero;
  private router = inject(Router);

  constructor() { }


  ngOnInit(): void {

  }

  goTo( path: string, id: string){
    this.router.navigate([`/heroes/${path}`, id]);
  }

}
