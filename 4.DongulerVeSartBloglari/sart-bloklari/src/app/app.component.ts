import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Şart blokları</h1>
  <!-- <p *ngIf="showFirstWord" style="color:red">Birinci yazı</p>
  //angular 17 ile birlikte değişti -->
  @if (showFirstWord) {
    <p style="color:{{showFirstWord === true ? 'red' : ''}}">Birinci yazı</p>
  }
  @if(showSecondWord){
    <p style="color: blue;">İkinci yazı</p>
  }

  <hr>
  <button (click)="show(1)">Birinci yazıyı göster</button>
  <button (click)="show(2)">İkinci yazıyı göster</button>
  `
})
//if blokları elementi gizlemez yok eder
export class AppComponent {
  showFirstWord: boolean = false;
  showSecondWord: boolean = false;
  show(num: number) {
    if (num == 1) {
      this.showFirstWord = true
      this.showSecondWord = false
    } else {
      this.showFirstWord = false
      this.showSecondWord = true
    }

    switch (num) {
      case 1:
        this.showFirstWord = true
        this.showSecondWord = false
        break;
      case 2:
        this.showFirstWord = false
        this.showSecondWord = true
        break;
      default:
        break;
    }

  }
}
