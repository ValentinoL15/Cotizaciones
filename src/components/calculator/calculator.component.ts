import { Component, inject, OnInit } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardImgDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
} from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CotizacionService } from '../../app/services/cotizacion.service';

@Component({
  selector: 'app-calculator',
  imports: [ButtonDirective,CardBodyComponent,CardComponent,
    CardImgDirective,
    CardTextDirective,
    CardTitleDirective,FormsModule, ReactiveFormsModule,ColComponent, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {

  private cotizacionService = inject(CotizacionService)

  totalDolares: number = 0;
  dolarValue: number = 0;  // <-- el valor actual del dólar
  totalEuros: number = 0;
  euroValue: number = 0;  // <-- el valor actual del euro 

  inputs: { value: number | null }[] = [];

  ngOnInit(): void {
    this.cotizacionService.get_cotizacion_dolar().subscribe({
      next: (res) => {
        if (res && res.venta) {
          this.dolarValue  = res.venta;  // <-- guardamos el valor de venta
          this.calculateTotal();  // recalculamos si ya había inputs
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.cotizacionService.get_cotizacion_eur().subscribe({
      next: (res : any) => {
        if (res && res.venta) {
          this.euroValue  = res.venta;  // <-- guardamos el valor de venta
          this.calculateTotal();  // recalculamos si ya había inputs
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  addInput() {
    this.inputs.push({ value: null });
  }
  
  removeIndex(index: number) {
    this.inputs.splice(index, 1);
    this.calculateTotal();
  }
  
  calculateTotal() {
    const sumaValores = this.inputs.reduce((acc, input) => acc + (Number(input.value) || 0), 0);
    this.totalDolares = parseFloat((sumaValores * this.dolarValue).toFixed(1));  // <-- multiplicamos por el dólar
    this.totalEuros = parseFloat((sumaValores * this.euroValue).toFixed(1));
  }
}
