import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado/empleado.model';
import { EmpleadosService } from './lista-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})

export class ListaEmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }
  id:number = 0;
  empleados:Empleado[] = [

    new Empleado('Wilmar', 'Zapata', 'Desarrollador', 1000, 'Stefanini', 'Masculino', ++this.id),
    new Empleado('Sandra', 'Gil', 'Presidente', 1500, 'BrostySabor', 'Femenino', ++this.id),
    new Empleado('Miguel', 'Jaramillo', 'Universitario', 800, 'IESA', 'Masculino', ++this.id),
    new Empleado('Isaac', 'Echeverri', 'Preescolar', 200, 'Comfama', 'Masculino', ++this.id)

  ];

  cuadroNombre:string = '';
  cuadroApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;
  cuadroEmpresa:string = '';
  cuadroGenero:string = '';
  empleados2: any;
  adelante:string = '>'
  atras:string = '<'
  page:number = 1;
  mostrarFormulario:boolean = false;
  idForm:number = 0;

  ngOnInit() {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.empleadosService.getEmpleados(this.page)
      .subscribe(data => {
        this.empleados2 = data;
    });
  }

  crearEmpleado(){
    this.empleadosService.createEmpleado(
      new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario,
        this.cuadroEmpresa,
        this.cuadroGenero,
        ++this.id
      )
    ).subscribe(data => {
      this.empleados.push(data);
      this.reiniciarCuadros();
    })
  }

  actualizarEmpleado(nuevoEmpleado:any, id:number){
    this.empleadosService.editEmpleado(nuevoEmpleado, id)
      .subscribe(
        data => {
        this.empleados[id] = {...data, id};
        this.mostrarFormulario = false;
        this.reiniciarCuadros();
      }
    )
  }

  eliminarEmpleado(id:number){
    this.empleadosService.deleteEmpleado(id)
      .subscribe(data => {
        console.log(data);
        this.empleados = this.empleados.filter(empleado => empleado.id !== id);
      })
  }

  restarPagina() {
    this.page = this.page > 1 ? --this.page : this.page;
    this.obtenerEmpleados();
  }

  sumarPagina() {
    this.page = this.page < this.empleados2.total_pages ? ++this.page : this.page;
    this.obtenerEmpleados();
  }

  mostrarFormularioEditar(id:number) {
    this.idForm = id;
    this.mostrarFormulario = true;
  }

  reiniciarCuadros(){
    this.cuadroNombre = '';
    this.cuadroApellido = '';
  }
}
