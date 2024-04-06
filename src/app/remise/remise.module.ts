import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RemiseListComponent } from './remise-list/remise-list.component';
import { RemiseEditComponent } from './remise-edit/remise-edit.component';
import { RemiseService } from './remise.service';
import { REMISE_ROUTES } from './remise.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(REMISE_ROUTES)
  ],
  declarations: [
    RemiseListComponent,
    RemiseEditComponent
  ],
  providers: [RemiseService],
  exports: []
})
export class RemiseModule { }
