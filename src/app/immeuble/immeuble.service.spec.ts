import { TestBed } from '@angular/core/testing';
import { ImmeubleService } from './immeuble.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ImmeubleService', () => {
  let service: ImmeubleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImmeubleService]
    });

    service = TestBed.get(ImmeubleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
