import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'loading';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .subscribe(e => {
        switch (true) {
          case e instanceof NavigationStart:
            console.log('Loading start...');
            break;
          case e instanceof NavigationEnd:
          case e instanceof NavigationError:
          case e instanceof NavigationCancel:
            console.log('Loading stop...');
            break;
        }
      });
  }
}
