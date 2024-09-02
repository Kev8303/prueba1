import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<h1>404 - Page Not Found</h1>`,
  styles: [
    `
      h1 {
        text-align: center;
        margin-top: 50px;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
