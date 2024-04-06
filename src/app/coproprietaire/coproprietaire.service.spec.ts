import { TestBed } from '@angular/core/testing';
import { CoproprietaireService } from './coproprietaire.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CoproprietaireService', () => {
  let service: CoproprietaireService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoproprietaireService]
    });

    service = TestBed.get(CoproprietaireService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
