import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemiseService } from '../remise.service';
import { Remise } from '../remise';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LotService } from 'src/app/lot/lot.service';

@Component({
  selector: 'app-remise-edit',
  templateUrl: './remise-edit.component.html'
})
export class RemiseEditComponent implements OnInit {


onchange($event: any) {
  console.log($event);
  this.remise.id_lot= $event.target.value;
}

  id!: string;
  remise!: Remise;
  feedback: any = {};
  lots: any = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private remiseService: RemiseService,
    private lotService: LotService) {
    
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Remise()); }
          return this.remiseService.findById(id);
        })
      )
      .subscribe({
        next: remise => {
          this.remise = remise;
          this.feedback = {};
          this.loadLots();
        },
        
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  loadLots(){
    this.lotService.getList().subscribe({
      next:(data:any)  => {
        this.lots = data;
      },
      error: (err:any) => {
      console.log (err)     }
    });
  }

  save() {
    console.log(this.remise);
    this.remiseService.save(this.remise).subscribe({
      
      next: remise => {
        this.remise = remise;
      
        this.feedback = {type: 'success', message: 'Enregistrement effectué!'};
        setTimeout(async () => {
          await this.router.navigate(['/remises']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Erreur enregistrement'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/remises']);
  }
}
