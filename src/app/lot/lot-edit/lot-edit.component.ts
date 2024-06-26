import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LotService } from '../lot.service';
import { Lot } from '../lot';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ImmeubleService } from 'src/app/immeuble/immeuble.service';
import { CoproprietaireService } from 'src/app/coproprietaire/coproprietaire.service';

@Component({
  selector: 'app-lot-edit',
  templateUrl: './lot-edit.component.html'
})
export class LotEditComponent implements OnInit {
onchangee($event: any) {
  this.lot.id_coproprio= $event.target.value;
}
onchange($event: any) {
  this.lot.id_immeuble= $event.target.value;
}

  id!: string;
  lot!: Lot;
  feedback: any = {};
  immeubles: any = [];
  coproprietaires: any = [];
  itemId:any={};



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lotService: LotService,
    private immeubleService:ImmeubleService,
    private coproprioService:CoproprietaireService) {
  }

  
  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get("id");
    console.log(this.itemId)
    this.lotService.getList().subscribe({
      next:(data:any) =>{
        this.loadImmeubles();
        this.loadCoproprietaire();
        this.lot=data.find((el:any)=>el.id===this.itemId);
        if (this.lot===undefined) {
          this.lot = new Lot()
        }
      },
      error: (err:any) => console.log(err)
    })

  }

  loadImmeubles(){
    this.immeubleService.getList().subscribe({
      next:(data:any)  => {
        this.immeubles = data;
      },
      error: (err:any) => {
      console.log (err)     }
    });
  }

  loadCoproprietaire(){
    this.coproprioService.getList().subscribe({
      next:(data:any)  => {
        this.coproprietaires = data;
      },
      error: (err:any) => {
      console.log (err)     }
    });
  }

  save() {
    console.log(this.lot);
    this.lotService.save(this.lot).subscribe({
      next: lot => {
        this.lot = lot;
        this.feedback = {type: 'success', message: 'Enregistrement effectué !'};
        setTimeout(async () => {
          await this.router.navigate(['/lots']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Erreur enregistrement'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/lots']);
  }
}
