import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  candleMockResponse,
  profileMockResponse,
  quoteMockResponse,
  newsMockResponse,
} from 'src/app/mock/mocks';
import { IProfile, ICandles, IQuote, INews } from 'src/app/modals/modals';
import { Observable, of } from 'rxjs';

const companyParam: string = 'AMZN';

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------------------- test locally -------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  class testingHttpService extends HttpService {
    getProfile(company: string): Observable<IProfile> {
      return of(profileMockResponse);
    }
  }

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpService, useValue: { testingHttpService } }],
    });
    service = TestBed.get(HttpService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a result', () => {
    service.getProfile(companyParam).subscribe((result) => {
      expect(result).toBeTruthy();
    });
  });
});
