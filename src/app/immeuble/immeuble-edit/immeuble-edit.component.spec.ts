import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImmeubleEditComponent } from './immeuble-edit.component';
import { ImmeubleService } from '../immeuble.service';

describe('ImmeubleEditComponent', () => {
  let component: ImmeubleEditComponent;
  let fixture: ComponentFixture<ImmeubleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImmeubleEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ImmeubleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmeubleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
