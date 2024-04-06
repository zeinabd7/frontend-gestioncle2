import { Routes } from '@angular/router';
import { ImmeubleListComponent } from './immeuble-list/immeuble-list.component';
import { ImmeubleEditComponent } from './immeuble-edit/immeuble-edit.component';

export const IMMEUBLE_ROUTES: Routes = [
  {
    path: 'immeubles',
    component: ImmeubleListComponent
  },
  {
    path: 'immeubles/:id',
    component: ImmeubleEditComponent
  }
];
