import { Component, OnInit } from '@angular/core';
import { LotFilter } from '../lot-filter';
import { LotService } from '../lot.service';
import { Lot } from '../lot';

@Component({
  selector: 'app-lot',
  templateUrl: 'lot-list.component.html'
})
export class LotListComponent implements OnInit {

  filter = new LotFilter();
  selectedLot!: Lot;
  feedback: any = {};
  lotList:any=[];


  

  constructor(private lotService: LotService) {
  }

  ngOnInit() {
    this.reset();
  }

  search(): void {
    this.lotService.load(this.filter);
  }

  reset(): void {
    this.lotService.getList().subscribe(
      
      {next:(data:any) => {
        console.log(data);
        this.lotList=data ;
      },
      error:(err:any)=> {
        console.error(err); 
      }}
    );
  }

  select(selected: Lot): void {
    this.selectedLot = selected;
  }

  delete(lot: Lot): void {
    if (confirm('Etes vous sur?')) {
      this.lotService.delete(lot).subscribe({
        next: (data:any) => {
          console.log(data);
          this.reset();
          this.feedback = {type: 'success', message: 'Suppression effectuée!'};
          
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Erreur suprression.'};
        }
      });
    }
  }
}
