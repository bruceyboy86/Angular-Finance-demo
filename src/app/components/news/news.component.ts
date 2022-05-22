import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/modals/modals';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  constructor(private http: HttpService) {}
  news!: INews;

  ngOnInit(): void {
    this.http.getCompanyNews('AMZN').subscribe((res) => {
      this.news = res;
    });
  }
}
