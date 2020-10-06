import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  styles: [`
    :host {
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 9999;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      margin: auto;
      padding: 0;
    }
  `],
  template: `
    <p>Loading...</p>
  `
})
export class LoadingComponent { }
