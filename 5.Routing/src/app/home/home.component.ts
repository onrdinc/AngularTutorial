import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private router: Router
  ) {

  }
  method() {
    //fonksiyon ile routing yapısı yönetme
    this.router.navigate(["about"]);
    this.router.navigateByUrl("/about")
  }
}
