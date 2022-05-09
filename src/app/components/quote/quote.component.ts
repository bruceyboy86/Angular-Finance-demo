import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IQuote } from 'src/app/modals/modals';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  constructor(private http: HttpService) {}
  quote!: IQuote;

  // TODO add dynamic currency based off of profile.currency
  ngOnInit(): void {
    this.http.getQuote('AMZN').subscribe((res) => {
      this.quote = res;
    });
  }
}
