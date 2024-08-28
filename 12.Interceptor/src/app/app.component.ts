import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private _http: HttpClient
  ) { }
//Interceptor gönderdiğimiz api isteklerini veya apiden dönen cevapları araya girererk arasında işlem yapmamızı sağlayan yöntemlerdir
  getApi() {
    this._http.get("https://jsonp1laceholder.typicode.com/todos").subscribe(res => {
      console.log(res);
    });
  }
}
