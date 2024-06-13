import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.url}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${environment.url}/heroes/${id}`).pipe(
      catchError(err => {
        return of(undefined);
      })
    );
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.url}/heroes?q=${term}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${environment.url}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {

    if (!hero.id) {
      throw new Error('The hero must have an id');
    }
    
    return this.httpClient.patch<Hero>(`${environment.url}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<boolean> {

    if (!id) {
      throw new Error('The hero must have an id');
    }

    return this.httpClient.delete<Hero>(`${environment.url}/heroes/${id}`).pipe(
      map(() => true),
      catchError(err => of(false))
    );
  }
}
