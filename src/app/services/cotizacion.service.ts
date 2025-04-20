import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  API_URL = 'https://api.bcra.gob.ar'

  constructor(private http: HttpClient) { }

  get_cotizacion_dolar(){
    return this.http.get(`${this.API_URL}/estadisticascambiarias/v1.0/Cotizaciones/USD`)
  }

  get_cotizacion_eur(){
    return this.http.get(`${this.API_URL}/estadisticascambiarias/v1.0/Cotizaciones/EUR`)
  }

  get_cotizacion_fs(){
    return this.http.get(`${this.API_URL}/estadisticascambiarias/v1.0/Cotizaciones/CHF`)
  }

  get_cotizacion_yen(){
    return this.http.get(`${this.API_URL}/estadisticascambiarias/v1.0/Cotizaciones/JPY`)
  }
}
