import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemiseEditComponent } from './remise-edit.component';
import { RemiseService } from '../remise.service';

describe('RemiseEditComponent', () => {
  let component: RemiseEditComponent;
  let fixture: ComponentFixture<RemiseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemiseEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [RemiseService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
