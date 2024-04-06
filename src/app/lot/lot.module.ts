import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LotListComponent } from './lot-list/lot-list.component';
import { LotEditComponent } from './lot-edit/lot-edit.component';
import { LotService } from './lot.service';
import { LOT_ROUTES } from './lot.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LOT_ROUTES)
  ],
  declarations: [
    LotListComponent,
    LotEditComponent
  ],
  providers: [LotService],
  exports: []
})
export class LotModule { }
