import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { error } from 'console';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {}

  //Metodo que ejecuta el metodo de guardar del servicio empleadoService
  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error => console.log(error));  
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  //Metodo que se ejecuta al presionar el boton guardar
  onSubmit(){
    this.guardarEmpleado();
    swal(
      'Empleado registrado',
      'Empleado registrado satisfactoriamente',
      'success'
    )
  }

}
