import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IProfile } from 'src/app/modals/modals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private http: HttpService) {}
  profile!: IProfile;

  // this will be used for an asynchronus call
  profile$ = this.http.getProfileAsync('AMZN');

  ngOnInit(): void {
    this.http.getProfile('AMZN').subscribe((res) => {
      this.profile = res;
    });
  }
}
