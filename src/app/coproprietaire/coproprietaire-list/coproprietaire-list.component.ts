import { Component, OnInit } from '@angular/core';
import { CoproprietaireFilter } from '../coproprietaire-filter';
import { CoproprietaireService } from '../coproprietaire.service';
import { Coproprietaire } from '../coproprietaire';

@Component({
  selector: 'app-coproprietaire',
  templateUrl: 'coproprietaire-list.component.html'
})
export class CoproprietaireListComponent implements OnInit {

  filter = new CoproprietaireFilter();
  selectedCoproprietaire!: Coproprietaire;
  feedback: any = {};
  coproprietaireList:any=[];


  

  constructor(private coproprietaireService: CoproprietaireService) {
  }

  ngOnInit() {
    this.reset();
  }

  search(): void {
    this.coproprietaireService.load(this.filter);
  }
  
  reset(): void {
    this.coproprietaireService.getList().subscribe(
      
      {next:(data:any) => {
        console.log(data);
        this.coproprietaireList=data ;
      },
      error:(err:any)=> {
        console.error(err); 
      }}
    );
  }

  select(selected: Coproprietaire): void {
    this.selectedCoproprietaire = selected;
  }

  delete(coproprietaire: Coproprietaire): void {
    console.log(coproprietaire);
    if (confirm('Etes vous sure?')) {
      this.coproprietaireService.delete(coproprietaire).subscribe({
        next: (data:any) => {
          console.log(data);
          this.reset();
          this.feedback = {type: 'success', message: 'Suprression effectuée!'};
        },
        error:(err:any) => {
          this.feedback = {type: 'warning', message: 'Erreur de  suppression.'};
        }
      });
    }
  }
}
