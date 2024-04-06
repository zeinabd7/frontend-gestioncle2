import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImmeubleListComponent } from './immeuble-list.component';
import { ImmeubleService } from '../immeuble.service';

describe('ImmeubleListComponent', () => {
  let component: ImmeubleListComponent;
  let fixture: ComponentFixture<ImmeubleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImmeubleListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ImmeubleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmeubleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
