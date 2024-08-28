import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("token");
  let newRequest = req.clone({
    headers:req.headers.set("Authentication","Bearer "+ token)
  });
  //pipe lar api isteklerinden dönen sonuçları işleyebilmemizi sağlıyor
  return next(newRequest).pipe(
    catchError((err:HttpErrorResponse)=>{
      //errorhandler
      console.log(err);
      return of()
    })
  );
};
