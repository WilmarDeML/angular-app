import { Component, OnInit } from '@angular/core';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-empleado',
  // template: '<p>Aquí iría un empleado desde el templete</p>',
  templateUrl: './empleado.component.html',
  // styles:["p{background-color:yellow}"],
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {

  private edad:number = 15;

  empleado = new Empleado('Wilmar', 'Zapata', 'Desarrollador', 1000, 'Stefanini', '', 9999);
  titulo = 'Un Empleado en particular'
  habilitado = true;
  textoHabilitar = 'Deshabilitar input Edad'
  registrado = false;
  alerta = '';

  getEdad(){
    return this.edad;
  }

  cambiarEdad(value:string){
    this.edad = Number(value);
  }

  cambiaInput(){
    this.habilitado = !this.habilitado;
  }

  onCheckboxChange(evento:Event) {
    this.habilitado = (<HTMLInputElement>evento.target).checked;
    if(this.habilitado){
      this.textoHabilitar = 'Deshabilitar input Edad';
      this.alerta = '';
    } else {
      this.alerta = 'Input Edad Deshabilitado';
      this.textoHabilitar = 'Habilitar input Edad'
    }
  }

  setSexo(evento:Event){
    this.empleado.sexo = (<HTMLInputElement>evento.target).value === 'masculino'
      ? 'Masculino'
      : 'Femenino'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
