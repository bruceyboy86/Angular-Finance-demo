import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IProfile, ICandles } from 'src/app/modals/modals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getProfile(company: string): Observable<IProfile> {
    return this.http.get<IProfile>(
      `${env.BASE_URL}stock/profile2/?symbol=` + company + `&token=${env.TOKEN}`
    );
  }

  getProfileAsync(company: string) {
    return this.http.get<IProfile>(
      `${env.BASE_URL}stock/profile2/?symbol=` + company + `&token=${env.TOKEN}`
    );
  }

  getCandles(company: string): Observable<ICandles> {
    return this.http.get<ICandles>(
      `${env.BASE_URL}stock/candle?symbol=` +
        company +
        `&resolution=60&from=1651187922&to=1651787922&token=${env.TOKEN}`
    );
  }

  getCompanyNews(company: string): Observable<any> {
    return this.http.get<any>(
      `${env.BASE_URL}company-news?symbol=` +
        company +
        `&from=2022-04-07&to=2022-05-07&token=${env.TOKEN}`
    );
  }

  getQuote(company: string): Observable<any> {
    return this.http.get<any>(
      `${env.BASE_URL}quote?symbol=` + company + `&token=${env.TOKEN}`
    );
  }
}
