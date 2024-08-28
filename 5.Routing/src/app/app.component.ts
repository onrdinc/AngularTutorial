import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <!-- <nav> -->
    <!-- importa routerlink eklenmeli -->
    <!-- routerlink singlepage yapısını sağlar -->
    <!-- <a routerLink="/home">Home Page</a> ||
    <a routerLink="/about">About Page</a> ||
    <a routerLink="/contact">Contact Page</a> || -->
  <!-- </nav> -->
  <router-outlet></router-outlet>
  
  
  `
})
export class AppComponent {

}
