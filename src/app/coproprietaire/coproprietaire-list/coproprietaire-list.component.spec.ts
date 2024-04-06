import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoproprietaireListComponent } from './coproprietaire-list.component';
import { CoproprietaireService } from '../coproprietaire.service';

describe('CoproprietaireListComponent', () => {
  let component: CoproprietaireListComponent;
  let fixture: ComponentFixture<CoproprietaireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoproprietaireListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [CoproprietaireService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoproprietaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
