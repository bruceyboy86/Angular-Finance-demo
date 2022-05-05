import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { IProfile } from 'src/app/modals/modals';
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
}
