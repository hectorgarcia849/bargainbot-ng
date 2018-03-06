import { TestBed, async, inject } from '@angular/core/testing';
// import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdsService } from './ads.service';
import {Ad} from '../models/ad.model';

// testing http requests: https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8

describe(`AdsService`, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpClientModule,
        // HttpClientTestingModule
      ],
      providers: [
        AdsService
      ]
    });
  });

  // afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
  //   backend.verify();
  // }));

  // it(`should return ads`, (inject([AdsService],
  //   (service: AdsService) => {
  //     service.getAds().subscribe();

      // backend.expectOne((req: HttpRequest<any>) => {
      //   const body = new HttpParams({ fromString: req.body });
      //
      //   return req.url === '/ads'
      //     && req.method === 'GET'
      //     && req.headers.get('Content-Type') === 'application/x-www-form-urlencoded'
      //     && body.get('ads') === 'kijiji';
      // }, `GET to 'ads'`);
    // })));

  // it(`should emit 'false' for 401 Unauthorized`, async(inject([AdsService, HttpTestingController],
  //   (service: AdsService, backend: HttpTestingController) => {
  //     service.getAds().subscribe((next) => {
  //       expect(next).toBeFalsy();
  //     });
  //
  //     backend.expectOne('auth/login').flush(null, { status: 401, statusText: 'Unauthorized' });
  //   })));

  it(`should get data`, async(inject([AdsService],
    (service: AdsService) => {
      service.getAds().subscribe((next) => {
        expect(next).toBeTruthy();
      });
    })));
});
