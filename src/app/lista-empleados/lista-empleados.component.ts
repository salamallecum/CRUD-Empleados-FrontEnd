import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  //Array de empleados
  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  //Metodo que llama el metodo obtenerListaDeEmpleados del servicio de empleados para retornar su información
  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato =>{
      this.empleados = dato;
    });
  }

  //Metodo que elimina el empleado (incluye la libreria swal para mostrar mensaje de confirmacion en una ventana modal)
  eliminarEmpleado(id:number){
    swal({
      title: '¿Está seguro?',
      text: "Confirme si desea eliminar el empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'Empleado eliminado satisfactoriamente',
            'success'
          )
        })
      }
    })
  }

  //Metodo para actualizar un empleado (abre el componente de edicion de empleados)
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  //Metodo para el boton detalles de un empleado
  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }
  
}
