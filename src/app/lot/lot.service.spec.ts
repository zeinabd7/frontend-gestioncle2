import { TestBed } from '@angular/core/testing';
import { LotService } from './lot.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LotService', () => {
  let service: LotService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LotService]
    });

    service = TestBed.get(LotService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
