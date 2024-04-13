import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoproprietaireService } from '../coproprietaire.service';
import { Coproprietaire } from '../coproprietaire';
import { map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-coproprietaire-edit',
  templateUrl: './coproprietaire-edit.component.html'
})
export class CoproprietaireEditComponent implements OnInit {

  id!: string;
  coproprietaire!: Coproprietaire;
  feedback: any = {};
  itemId: any={};
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coproprietaireService: CoproprietaireService) {
  }

  
  ngOnInit() {
    //TODO:
    this.itemId = this.route.snapshot.paramMap.get("id");
    console.log(this.itemId)
    this.coproprietaireService.getList().subscribe({
      next:(data:any) =>{
        this.coproprietaire=data.find((el:any)=>el.id===this.itemId);
        if (this.coproprietaire===undefined) {
          this.coproprietaire = new Coproprietaire()
        }
      },
      error: (err:any) => console.log(err)
    })

  }
  

  save() {
    this.coproprietaireService.save(this.coproprietaire).subscribe({
      next: coproprietaire => {
        console.log("save function",coproprietaire);
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
