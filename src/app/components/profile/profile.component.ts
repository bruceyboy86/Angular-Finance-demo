import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IProfile } from 'src/app/modals/modals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpService) {}
  profile!: IProfile;

  ngOnInit(): void {
    this.http.getProfile('AMZN').subscribe((res) => {
      this.profile = res;
    });
  }
}
