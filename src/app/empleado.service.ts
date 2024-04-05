import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

   //Esta URL obtiene el listado de todos los empleados en el backend
   private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  //Metodo que obtiene la lista de empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //Metodo para registrar un empleado
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  //Metodo para actualizar un empleado
  actualizarEmpleado(id:number, empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //Metodo para obtener o buscar un empleado por su id
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }


  //Metodo para eliminar un empleado
  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
