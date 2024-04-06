import { Routes } from '@angular/router';
import { LotListComponent } from './lot-list/lot-list.component';
import { LotEditComponent } from './lot-edit/lot-edit.component';

export const LOT_ROUTES: Routes = [
  {
    path: 'lots',
    component: LotListComponent
  },
  {
    path: 'lots/:id',
    component: LotEditComponent
  }
];
