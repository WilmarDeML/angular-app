import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-calculadora',
  templateUrl: './mini-calculadora.component.html',
  styleUrls: ['./mini-calculadora.component.css']
})
export class MiniCalculadoraComponent implements OnInit {

  titulo:string = 'Mini Calculadora'
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

  sumar():void {
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar():void {
    this.resultado = this.numero1 * this.numero2;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
