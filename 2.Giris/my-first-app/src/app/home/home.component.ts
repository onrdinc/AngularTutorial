import { Component } from '@angular/core';

@Component({
  selector: 'app-home',//angular oluşturdugu her bir componentin aynı zamanda bir element olacağını ve istersek biz bunu element olarak kullanabileceğimizi belirtiyor bunun içinde buna bir element ismi veriyor bunu da selector ile yapıyor
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
