import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImmeubleListComponent } from './immeuble-list/immeuble-list.component';
import { ImmeubleEditComponent } from './immeuble-edit/immeuble-edit.component';
import { ImmeubleService } from './immeuble.service';
import { IMMEUBLE_ROUTES } from './immeuble.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(IMMEUBLE_ROUTES)
  ],
  declarations: [
    ImmeubleListComponent,
    ImmeubleEditComponent
  ],
  providers: [ImmeubleService],
  exports: []
})
export class ImmeubleModule { }
