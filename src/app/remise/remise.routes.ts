import { Routes } from '@angular/router';
import { RemiseListComponent } from './remise-list/remise-list.component';
import { RemiseEditComponent } from './remise-edit/remise-edit.component';

export const REMISE_ROUTES: Routes = [
  {
    path: 'remises',
    component: RemiseListComponent
  },
  {
    path: 'remises/:id',
    component: RemiseEditComponent
  }
];
