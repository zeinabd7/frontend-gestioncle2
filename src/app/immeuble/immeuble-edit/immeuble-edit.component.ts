import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImmeubleService } from '../immeuble.service';
import { Immeuble } from '../immeuble';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-immeuble-edit',
  templateUrl: './immeuble-edit.component.html'
})
export class ImmeubleEditComponent implements OnInit {

  id!: string;
  immeuble!: Immeuble;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private immeubleService: ImmeubleService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Immeuble()); }
          return this.immeubleService.findById(id);
        })
      )
      .subscribe({
        next: immeuble => {
          this.immeuble = immeuble;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.immeubleService.save(this.immeuble).subscribe({
      next: immeuble => {
        this.immeuble = immeuble;
        this.feedback = {type: 'success', message: 'Enregistrement effectué!'};
        setTimeout(async () => {
          await this.router.navigate(['/immeubles']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Erreur enregistrement'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/immeubles']);
  }
}
