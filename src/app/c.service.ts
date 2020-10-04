import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CService {
  fakeHttp(): Observable<string> {
    return timer(5000)
      .pipe(
        switchMap(_ => of('Fake Http Call!'))
      );
  }
}
