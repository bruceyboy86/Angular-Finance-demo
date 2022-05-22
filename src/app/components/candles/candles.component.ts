import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ICandles } from 'src/app/modals/modals';
import * as Highcharts from 'highcharts';
import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-candles',
  templateUrl: './candles.component.html',
  styleUrls: ['./candles.component.css'],
})
export class CandlesComponent implements OnInit {
  constructor(private http: HttpService) {}
  candles!: any;
  chartDataCandles: any[] = [];

  public options: any = {
    // chart: {},
    title: {
      text: 'Sample Scatter Plot',
    },
    credits: {
      enabled: false,
    },
    // xAxis: {
    //   type: 'datetime',
    //   labels: {},
    // },
    series: [
      {
        type: 'candlestick',
        name: 'company name here',
        data: this.chartDataCandles,
      },
    ],
  };

  ngOnInit(): void {
    this.http.getCandles('AMZN').subscribe((res) => {
      // this.candles = zip(res.c, res.t, [res.l]);
      // res.map((r: any) =>
      // );
      // https://underscorejs.org/#zip
      // https://rxjs.dev/api/index/function/zip

      this.candles = res;
      this.mapResultForChart();
    });
    // Highcharts.chart('container', this.options);
  }
  mapResultForChart(): void {
    if (!!this.candles) {
      // make fresh arrays capable of rendering on highcharts stock candles chart
      this.candles.c.map((candle: number, i: string | number) =>
        this.chartDataCandles.push([
          this.candles.t[i] * 1000,
          this.candles.o[i],
          this.candles.h[i],
          this.candles.l[i],
          candle,
        ])
      );
      console.log(this.chartDataCandles);
      Highcharts.chart('container', this.options);
      // for (let i = 0; i < this.candles.c.length; i++) {

      // }
      // zip(
      //   of(this.candles.c[0]),
      //   of(this.candles.h[0]),
      //   of(this.candles.l[0]),
      //   of(this.candles.o[0]),
      //   of(this.candles.t[0]),
      //   of(this.candles.v[0])
      // )
      //   .pipe(map(([c, h, l, o, t, v]) => [c, h, l, o, t, v]))
      //   .subscribe((result) => console.log(result));
    } else {
      return;
    }
  }
}
