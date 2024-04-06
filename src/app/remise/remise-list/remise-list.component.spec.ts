import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RemiseListComponent } from './remise-list.component';
import { RemiseService } from '../remise.service';

describe('RemiseListComponent', () => {
  let component: RemiseListComponent;
  let fixture: ComponentFixture<RemiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemiseListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [RemiseService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
