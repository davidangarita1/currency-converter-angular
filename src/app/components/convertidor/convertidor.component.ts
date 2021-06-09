import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent implements OnInit {
  amount:number = 0;
  have:string = 'USD';
  to:string = 'EUR';
  result:number = 0;

  currencies: string[] = ['USD', 'EUR', 'GBP', 'COP']
  constructor() { }

  ngOnInit(): void {
  }

  converter() {
    switch(this.have) {
      case 'USD':
        if (this.to === 'USD') {
          this.result = this.amount;
        };
        if (this.to === 'EUR') {
          this.result = this.amount * 0.82;
        };
        if (this.to === 'GBP') {
          this.result = this.amount * 0.71;
        };
        if (this.to === 'COP') {
            this.result = this.amount * 3594.60;
        };
        break;
      case 'EUR':
        if (this.to === 'USD') {
          this.result = this.amount * 1.22;
        };
        if (this.to === 'EUR') {
          this.result = this.amount;
        };
        if (this.to === 'GBP') {
          this.result = this.amount * 0.86;
        };
        if (this.to === 'COP') {
            this.result = this.amount * 4379.38;
        };
        break;
      case 'GBP':
        if (this.to === 'USD') {
          this.result = this.amount * 1.42;
        };
        if (this.to === 'EUR') {
          this.result = this.amount * 1.16;
        };
        if (this.to === 'GBP') {
          this.result = this.amount;
        };
        if (this.to === 'COP') {
            this.result = this.amount * 5092.11;
        };
        break;
      case 'COP':
        if (this.to === 'USD') {
          this.result = this.amount * 0.00028;
        };
        if (this.to === 'EUR') {
          this.result = this.amount * 0.00023;
        };
        if (this.to === 'GBP') {
          this.result = this.amount * 0.00020;
        };
        if (this.to === 'COP') {
            this.result = this.amount;
        };
        break;
    }

  }

}
