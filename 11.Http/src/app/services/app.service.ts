import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { GenericHttpService } from './generic-http-service.service';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _err: ErrorService,
    private _httpGeneric:GenericHttpService
  ) { }

  get(callback: (res: any) => void) {
    //generic yöntem

    this._httpGeneric.get("todos",res=>callback(res));
    //
    this._http.get("apiadresi").subscribe({
      next: (res) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    });
  }
  add(model: any, callback: (res: any) => void) {
    //generic yöntem
    this._httpGeneric.post("todos",model,res=>callback(res));
    //
    this._http.post("apiadresi", model, {}).subscribe({
      next: (res: any) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        this._err.errorHandler(err);
      }
    });
  }
}
