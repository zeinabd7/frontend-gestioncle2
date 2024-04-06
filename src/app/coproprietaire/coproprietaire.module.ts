import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoproprietaireListComponent } from './coproprietaire-list/coproprietaire-list.component';
import { CoproprietaireEditComponent } from './coproprietaire-edit/coproprietaire-edit.component';
import { CoproprietaireService } from './coproprietaire.service';
import { COPROPRIETAIRE_ROUTES } from './coproprietaire.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COPROPRIETAIRE_ROUTES)
  ],
  declarations: [
    CoproprietaireListComponent,
    CoproprietaireEditComponent
  ],
  providers: [CoproprietaireService],
  exports: []
})
export class CoproprietaireModule { }
