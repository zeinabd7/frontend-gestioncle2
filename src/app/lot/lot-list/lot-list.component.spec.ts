import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LotListComponent } from './lot-list.component';
import { LotService } from '../lot.service';

describe('LotListComponent', () => {
  let component: LotListComponent;
  let fixture: ComponentFixture<LotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LotListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [LotService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
