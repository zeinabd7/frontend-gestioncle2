import { Component, OnInit } from '@angular/core';
import { RemiseFilter } from '../remise-filter';
import { RemiseService } from '../remise.service';
import { Remise } from '../remise';

@Component({
  selector: 'app-remise',
  templateUrl: 'remise-list.component.html'
})
export class RemiseListComponent implements OnInit {

  filter = new RemiseFilter();
  selectedRemise!: Remise;
  feedback: any = {};
  remiseList: any = [];
  

  
  constructor(private remiseService: RemiseService) {
  }

  ngOnInit() {
    this.reset();

  }

  search(): void {
    this.remiseService.load(this.filter);
  }
  
  reset(): void {
    this.remiseService.getList().subscribe(
      
      {next:(data:any) => {
        console.log(data);
        this.remiseList=data ;
      },
      error:(err:any)=> {
        console.error(err); 
      }}
    );
  }

  select(selected: Remise): void {
    this.selectedRemise = selected;
  }

  delete(remise: Remise): void {
    if (confirm('Etes vous sure?')) {
      this.remiseService.delete(remise).subscribe({
        next: (data:any) => {
          console.log(data);
          this.reset();
          this.feedback = {type: 'success', message: 'Suppression effectuée avec succès!'};
          
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Erreur de suppression'};
        }
      });
    }
  }
}
