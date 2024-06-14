import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: UserInterface | undefined;

  /**
   * Gets the current user.
   * @returns The current user object, or undefined if there is no user.
   * La función structuredClone es una función que se utiliza para crear una copia estructurada de un objeto en JavaScript. 
   * En este caso, this.user es el objeto que se está clonando. La función structuredClone es útil cuando necesitas crear una copia de un objeto complejo que contiene propiedades anidadas,
   * como objetos dentro de objetos. En lugar de simplemente asignar el objeto a una nueva variable, structuredClone crea una copia completa del objeto y todas sus propiedades, 
   * asegurándose de que no haya referencias compartidas entre el objeto original y la copia.
   */
  get currentuser() {
    if (!this.user) return undefined;
    // return { ...this.user };
    return structuredClone(this.user) 
  }

  constructor(private http: HttpClient) { }
  

  login(email: string, password: string): Observable<UserInterface> {
    
    return this.http.get<UserInterface>(`${environment.url}/users/1`).pipe(
      tap( user => {
        this.user = user;
      }),
      tap( (user) => {
        localStorage.setItem('token', 'dsfadfsd.fdfsdfsd.fdsfsdfs.fsdfsdf');
      })
    );
  }


  logout() {
    this.user = undefined;
    localStorage.clear();
  }

  checkAuth(): Observable<boolean> {
    
    if (!localStorage.getItem('token')) {
      return of(false);
      // return false;
    }
  
    const token = localStorage.getItem('token');
    return this.http.get<UserInterface>(`${environment.url}/users/1`).pipe(
      tap( user =>  this.user = user ),
      map( (user) => {
        // console.log('!!user ', !!user ) // se convierte a booleano con la negacion !
        return !!user;
      }),
      catchError( error => of(false))
    )
  }

}
