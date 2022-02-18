import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { MiniCalculadoraComponent } from './componentes/mini-calculadora/mini-calculadora.component';
import { RegistroUsuariosComponent } from './componentes/registro-usuarios/registro-usuarios.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    MiniCalculadoraComponent,
    RegistroUsuariosComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
