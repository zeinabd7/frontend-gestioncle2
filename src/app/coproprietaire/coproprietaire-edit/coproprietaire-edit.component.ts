import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoproprietaireService } from '../coproprietaire.service';
import { Coproprietaire } from '../coproprietaire';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-coproprietaire-edit',
  templateUrl: './coproprietaire-edit.component.html'
})
export class CoproprietaireEditComponent implements OnInit {

  id!: string;
  coproprietaire!: Coproprietaire;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coproprietaireService: CoproprietaireService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Coproprietaire()); }
          return this.coproprietaireService.findById(id);
        })
      )
      .subscribe({
        next: coproprietaire => {
          this.coproprietaire = coproprietaire;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.coproprietaireService.save(this.coproprietaire).subscribe({
      next: coproprietaire => {
        this.coproprietaire = coproprietaire;
        this.feedback = {type: 'success', message: 'Enregistrement effectué!'};
        setTimeout(async () => {
          await this.router.navigate(['/coproprietaires']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Erreur enregistrement'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/coproprietaires']);
  }
}
