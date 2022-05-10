import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ICandles } from 'src/app/modals/modals';
import * as Highcharts from 'highcharts';
import { zip } from 'rxjs';

@Component({
  selector: 'app-candles',
  templateUrl: './candles.component.html',
  styleUrls: ['./candles.component.css'],
})
export class CandlesComponent implements OnInit {
  constructor(private http: HttpService) {}
  candles!: any;

  public options: any = {
    chart: {},
    title: {
      text: 'Sample Scatter Plot',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {},
    },
    series: [
      {
        name: 'Normal',
        // data: [[new Date('2018-01-25 18:38:31').getTime(), 2]],
        // data: [this.candles.c],
      },
      {
        name: 'Abnormal',
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]],
      },
    ],
  };

  ngOnInit(): void {
    this.http.getCandles('AMZN').subscribe((res) => {
      // this.candles = zip(res.c, res.t, [res.l]);
      // res.map((r: any) =>
      // );
      // https://underscorejs.org/#zip

      this.candles = res;
    });
    Highcharts.chart('container', this.options);
  }
}
