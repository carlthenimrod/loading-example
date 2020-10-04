import { Injectable } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .subscribe(e => {
        switch (true) {
          case e instanceof NavigationStart:
            this.loadingSubject.next(true);
            break;
          case e instanceof NavigationEnd:
          case e instanceof NavigationError:
          case e instanceof NavigationCancel:
            this.loadingSubject.next(false);
            break;
        }
      });
  }
}
