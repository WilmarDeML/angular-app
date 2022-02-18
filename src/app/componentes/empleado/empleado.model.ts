export class Empleado {

  nombre:string = '';
  apellido:string = '';
  cargo:string = '';
  empresa:string = '';
  salario:number = 0;
  sexo:string = '';
  id:any = 0;
  constructor(nombre:string, apellido:string, cargo:string, salario:number, empresa:string, sexo:string, id:number){

    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
    this.empresa = empresa;
    this.sexo = sexo;
    this.id = id;

  }

}
