import { TestBed } from '@angular/core/testing';
import { RemiseService } from './remise.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RemiseService', () => {
  let service: RemiseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RemiseService]
    });

    service = TestBed.get(RemiseService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
