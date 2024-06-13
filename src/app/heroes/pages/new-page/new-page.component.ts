import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss'
})
export class NewPageComponent implements OnInit {

  public publisher: any = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]


  public heroForm: FormGroup = this.fb.group({
    id: ['', []],
    superhero: ['', []],
    publisher: ['', []],
    alterEgo: ['', []],
    first_appearance: ['', []],
    characters: ['', []],
    alt_img: ['', []]
  });


  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  constructor(private dialog: MatDialog, public fb: FormBuilder, private heroService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit-hero')) {
      return;
    }

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroService.getHeroById(id))
    ).subscribe({
      next: (hero) => {
        if (!hero) {
          this.router.navigateByUrl('/');
          return;
        }
        // this.heroForm.reset(hero);
        // this.heroForm.patchValue(hero);
        this.heroForm.patchValue({
          id: hero.id,
          superhero: hero.superhero,
          publisher: hero.publisher,
          alterEgo: hero.alter_ego,
          first_appearance: hero.first_appearance,
          characters: hero.characters,
          alt_img: hero.alt_img
        });
      },
      error: (err) => {
        console.log('Error', err);
      },
      complete: () => {
        console.log('Complete');
      }
    });

  }

  submit() {
    if (this.heroForm.invalid) {
      return;
    }

    if (this.currentHero.id) {
      // Update
      this.heroService.updateHero(this.currentHero).subscribe({
        next: (resp) => {
          console.log('Respuesta', resp);
          this.showSnackBar(`Heroe ${resp.superhero} actualizado`);
        },
        error: (err) => {
          console.log('Error', err);
        },
        complete: () => {
          console.log('Complete');
        }
      });
      return;
    }

    // Create
    this.heroService.addHero(this.currentHero)
      .subscribe(resp => {
        // mostrar mensaje snack bar y navegar a /heroes/edit-hero/:id
        console.log('Creado', resp);
        this.showSnackBar(`${resp.superhero} created`);
        this.router.navigate(['/heroes/edit-hero', resp.id]);
      });
  }


  deleteHero() {
    
    if (!this.currentHero.id) {
      throw new Error('The hero must have an id');
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().pipe(
      filter((result) => {
        return result;
      }), // solo si es true lo deja pasar
      switchMap((result) =>  this.heroService.deleteHero(this.currentHero.id)),
      filter((wasDeleted) => wasDeleted), // solo si es true lo deja pasar
      // tap((result) => {
      //   console.log('Result', result); 
      // })
    ).subscribe(result => {
      this.router.navigate(['/heroes']);
    });

    // dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed');
    // console.log({ result });
    //   if (!result) return;
    //   this.heroService.deleteHero(this.currentHero.id)
    //     .subscribe(resp => {
    //       if (resp) {
    //         this.showSnackBar(`Heroe ${this.currentHero.superhero} deleted`);
    //         this.router.navigate(['/heroes']);
    //       } else {
    //         this.showSnackBar(`Error deleting ${this.currentHero.superhero}`);
    //       }
    //     });
    // });
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'done', {
      duration: 2500
    });
  }
}
