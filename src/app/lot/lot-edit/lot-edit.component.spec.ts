import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LotEditComponent } from './lot-edit.component';
import { LotService } from '../lot.service';

describe('LotEditComponent', () => {
  let component: LotEditComponent;
  let fixture: ComponentFixture<LotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LotEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [LotService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
