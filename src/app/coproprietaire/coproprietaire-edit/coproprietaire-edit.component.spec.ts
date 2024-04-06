import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoproprietaireEditComponent } from './coproprietaire-edit.component';
import { CoproprietaireService } from '../coproprietaire.service';

describe('CoproprietaireEditComponent', () => {
  let component: CoproprietaireEditComponent;
  let fixture: ComponentFixture<CoproprietaireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoproprietaireEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CoproprietaireService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprietaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
