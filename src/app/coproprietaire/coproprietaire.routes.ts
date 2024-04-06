import { Routes } from '@angular/router';
import { CoproprietaireListComponent } from './coproprietaire-list/coproprietaire-list.component';
import { CoproprietaireEditComponent } from './coproprietaire-edit/coproprietaire-edit.component';

export const COPROPRIETAIRE_ROUTES: Routes = [
  {
    path: 'coproprietaires',
    component: CoproprietaireListComponent
  },
  {
    path: 'coproprietaires/:id',
    component: CoproprietaireEditComponent
  }
];
