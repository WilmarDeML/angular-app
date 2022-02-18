import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class EmpleadosService {
  constructor(private http: HttpClient) { }

  getEmpleados(page:number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`);
  }

  createEmpleado(empleado:any): Observable<any> {
    return this.http.post('https://reqres.in/api/users', empleado);
  }

  editEmpleado(empleado: any, id: any): Observable<any>{
    return this.http.post(`https://reqres.in/api/users/${id}`, empleado);
  }

  deleteEmpleado(id:any): Observable<any>{
    return this.http.delete(`https://reqres.in/api/users/${id}`)
  }
}
