import { Component, OnInit } from '@angular/core';
import { CService } from '../c.service';

@Component({
  selector: 'app-b',
  template: `
    <h2>This is... B Component</h2>
  `
})
export class BComponent implements OnInit {
  constructor(private cService: CService) { }

  ngOnInit(): void {
    this.cService.fakeHttp().subscribe(e => console.log(e));
  }
}
