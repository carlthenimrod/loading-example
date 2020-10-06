import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CService } from './c.service';

@Injectable({
  providedIn: 'root'
})
export class CResolver implements Resolve<string> {
  constructor(
    private cService: CService
  ) { }

  resolve(): Observable<string> {
    return this.cService.fakeHttp();
  }
}
