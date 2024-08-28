
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
  <input [(ngModel)]="model.title">
  <button (click)="save();">Kaydet</button>
  
  `
})
export class AppComponent {
  model: {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  } = {
      id: 0,
      userId: 1,
      title: "",
      completed: false
    }

  constructor(
    private _app: AppService,//servisten çekiyor
    private _http: HttpClient
  ) {
    //get
    //  this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(response=>{
    //   console.log(response);
    //  });
    //günümüzde bu şekilde kullanılıyor
    this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      //api başarılı olsa da basarısız olsa da çalıştır demek
      complete: () => {

      }
    });
    //post
    // this._http.post("api adresi", model).subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err);
    //   }
    // })

    let headers = {
      headers: {
        "authorization": "deger"
      }
    }
    this._http.get("apiadresi", headers).subscribe(res => {
      console.log(res);
    });

    _app.get((res) => {
      console.log(res);
    })
  }
  save() {
    this._http.post("apiadresi", this.model).subscribe(res => {
      console.log(res);
    })
  }
  save2() {
    this._app.add(this.model, (res) => {
      console.log(res);
    })
  }
}
//api istekleri service kısımlarında yazılmalıdır.

