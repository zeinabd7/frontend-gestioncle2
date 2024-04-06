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


  // get coproprietaireList(): Coproprietaire[] {
  //   return this.coproprietaireService.coproprietaireList;
  // }

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
        console.error(err); // Log any errors
      }}
    );
  }

  select(selected: Coproprietaire): void {
    this.selectedCoproprietaire = selected;
  }

  delete(coproprietaire: Coproprietaire): void {
    if (confirm('Are you sure?')) {
      this.coproprietaireService.delete(coproprietaire).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
