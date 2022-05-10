import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IProfile, ICandles } from 'src/app/modals/modals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpService) {}
  profile!: IProfile;
  candles!: ICandles;
  news: any;
  quote: any;

  // this will be used for an asynchronus call
  profile$ = this.http.getProfileAsync('AMZN');

  // TODO unsubscribe

  ngOnInit(): void {
    // observable profile
    // this.http.getProfile('AMZN').subscribe((res) => {
    //   this.profile = res;
    // });
    // async profile
    // this.http.getProfile('AMZN').subscribe((res) => {
    //   this.profile = res;
    // });
    // this.http.getCandles('AMZN').subscribe((res) => {
    //   this.candles = res;
    // });
    this.http.getCompanyNews('AMZN').subscribe((res) => {
      this.news = res;
    });
    // this.http.getQuote('AMZN').subscribe((res) => {
    //   this.quote = res;
    // });
  }
}
