import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private router: Router) {
  }

  close() {
    this.sidenav.close();
  }

  onLogOut() {
    this.router.navigate([''])
      .then(() => {
        this.sidenav.close();
      });
  }
}
