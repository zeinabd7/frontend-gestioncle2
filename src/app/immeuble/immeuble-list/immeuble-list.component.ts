import { Component, OnInit } from '@angular/core';
import { ImmeubleFilter } from '../immeuble-filter';
import { ImmeubleService } from '../immeuble.service';
import { Immeuble } from '../immeuble';

@Component({
  selector: 'app-immeuble',
  templateUrl: 'immeuble-list.component.html'
})
export class ImmeubleListComponent implements OnInit {

  filter = new ImmeubleFilter();
  selectedImmeuble!: Immeuble;
  feedback: any = {};
  immeubleList:any=[];

  // get immeubleList(): Immeuble[] {
  //   return this.immeubleService.immeubleList;
  // }

  constructor(private immeubleService: ImmeubleService) {
  }

  ngOnInit() {
    this.reset();
  }

  search(): void {
    this.immeubleService.load(this.filter);
  }

  reset(): void {
    this.immeubleService.getList().subscribe(
      
      {next:(data:any) => {
        console.log(data);
        this.immeubleList=data ;
      },
      error:(err:any)=> {
        console.error(err); // Log any errors
      }}
    );
  }

  select(selected: Immeuble): void {
    this.selectedImmeuble = selected;
  }

  delete(immeuble: Immeuble): void {
    if (confirm('Are you sure?')) {
      this.immeubleService.delete(immeuble).subscribe({
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
