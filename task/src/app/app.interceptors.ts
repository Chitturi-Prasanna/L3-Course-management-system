import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function loginInterceptor(req:HttpRequest<unknown>,next:HttpHandlerFn):Observable<HttpEvent<unknown>>{
    const baseUrl='http://localhost:3000/'
    req=req.clone({
        url:baseUrl+req.url,
        
    })
    if(localStorage.getItem('token')){
    req=req.clone({
    setHeaders: 
    {
      'Authorization': `${localStorage.getItem('token')}`,
      'ngrok-skip-browser-warning': 'true',
      'Content-type':'application/json'
    } 
  })
  }
  return next(req)
}