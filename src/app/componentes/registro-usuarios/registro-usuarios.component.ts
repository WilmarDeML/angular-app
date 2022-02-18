import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  titulo:string = 'Registro de Usuarios';
  mensaje:string = '';
  registrado:boolean = false;
  nombre:string = '';
  apellido:string = '';
  entradas:Array<any>;
  opcionRegistrar:string = 'Registrar';

  constructor() {
    this.entradas = [
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
    ]
  }

  registrar(){
    this.registrado = !this.registrado;
    this.opcionRegistrar = this.registrado
      ? 'Salir'
      : 'Registrar'
    this.mensaje = 'Bienvenido ';
  }

  ngOnInit(): void {
  }

}
