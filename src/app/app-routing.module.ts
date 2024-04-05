import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';

//Definimos las rutas de acceso que tendra en cuenta el sistema
//estamos direccionando el sistema al componente listaEmpleados para que asi este vacia la url nos lleve a dicho componente
const routes: Routes = [
  {path : 'empleados', component:ListaEmpleadosComponent},
  {path : '', redirectTo:'empleados', pathMatch:'full'},
  {path : 'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path : 'empleado-detalles/:id', component: EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
