import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  API_URL = 'https://dolarapi.com'

  constructor(private http: HttpClient) { }

  public dolarBlue$ = new BehaviorSubject<any>(null);
  

  get_cotizacion_dolar(){
    return this.http.get(`${this.API_URL}/v1/dolares/blue`).pipe(
      tap((res:any) => {
        this.dolarBlue$.next(res);
      })
    )
  }

  get_cotizacion_eur(){
    return this.http.get(`${this.API_URL}/v1/cotizaciones/eur`)
  }

  get_cotizacion_fs(){
    return this.http.get(`${this.API_URL}/`)
  }

  get_cotizacion_yen(){
    return this.http.get(`${this.API_URL}/`)
  }
}
