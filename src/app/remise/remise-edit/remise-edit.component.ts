import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemiseService } from '../remise.service';
import { Remise } from '../remise';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LotService } from 'src/app/lot/lot.service';
import { HttpClient } from '@angular/common/http';

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
  selectedFile: File | null = null;
  formData:any=[];
  itemId:any={};



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private remiseService: RemiseService,
    private lotService: LotService,
    private http: HttpClient) {
    
  }
  onFileSelected(event: any) {
    //this.selectedFile = event.target.files[0] as File;
    const fileName = event.target.files[0].name;
    this.selectedFile = fileName;
  }

  

  
  ngOnInit() {
    //TODO:
    this.itemId = this.route.snapshot.paramMap.get("id");
    console.log(this.itemId)
    this.remiseService.getList().subscribe({
      next:(data:any) =>{
        this.loadLots();
        this.remise=data.find((el:any)=>el.id===this.itemId);
        if (this.remise===undefined) {
          this.remise = new Remise()
        }
      },
      error: (err:any) => console.log(err)
    })

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
  // save() {
  //   const formData = new FormData();
  //   formData.append('id_lot', this.remise.id_lot.toString());
  //   formData.append('donneur', this.remise.donneur);
  //   formData.append('receveur', this.remise.receveur);
  //   //formData.append('date_remise', this.remise.date_remise.toISOString());
  //   formData.append('commentaire', this.remise.commentaire);
  //   formData.append('signature', this.remise.signature);
  //   if (this.selectedFile) {
  //     formData.append('media', this.selectedFile, this.selectedFile.name);
  //   }
  
  //   console.log(this.remise);
  //   console.log(formData);
  //   this.remiseService.save(formData).subscribe({
  //     next: (remise:any) => {
  //       console.log("REMISE",remise);
  //       //this.remise=remise;
  //       this.formData = remise;
  //       console.log("ENTRER DANS REMISE");
  //       this.feedback = {type: 'success', message: 'Enregistrement effectué!'};
  //       setTimeout(async () => {
  //         await this.router.navigate(['/remises']);
  //       }, 1000);
  //     },
  //     error: (err:any) => {
  //       this.feedback = {type: 'warning', message: 'Erreur enregistrement'};
  //     }
  //   });
  // }

  

  async cancel() {
    await this.router.navigate(['/remises']);
  }
}
