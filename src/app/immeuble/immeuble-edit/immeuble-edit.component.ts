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
  itemId:any={};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private immeubleService: ImmeubleService) {
  }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get("id");
    console.log(this.itemId)
    this.immeubleService.getList().subscribe({
      next:(data:any) =>{
        this.immeuble=data.find((el:any)=>el.id===this.itemId);
        if (this.immeuble===undefined) {
          this.immeuble = new Immeuble()
        }
      },
      error: (err:any) => console.log(err)
    })

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
