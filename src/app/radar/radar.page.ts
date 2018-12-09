import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.page.html',
  styleUrls: ['./radar.page.scss'],
})
export class RadarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProfile() {
    this.router.navigateByUrl('/profile')
  }

}
