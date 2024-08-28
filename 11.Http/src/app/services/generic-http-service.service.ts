import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  apiUrl: string = "apiUrl";
  constructor(
    private _http: HttpClient,
    private _err: ErrorService
  ) { }

  get(api: string, callback: (res: any) => void) {
    let headers={
      headers:{
        "authorization":localStorage.getItem("token")
      }
    }
    this._http.get(this.apiUrl + api, {}).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    })
  }
  post(api: string, model: any, callback: (res: any) => void) {
    this._http.post(this.apiUrl + api, model, {}).subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    })
  }
}
