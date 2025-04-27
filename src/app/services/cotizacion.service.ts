import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  API_URL = 'https://dolarapi.com'

  constructor(private http: HttpClient) { }

  get_cotizacion_dolar(){
    return this.http.get(`${this.API_URL}/v1/dolares/blue`)
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
