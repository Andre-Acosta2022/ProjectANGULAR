import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SolicitudComponent } from './component/solicitud/solicitud.component';
import { DocumentacionComponent } from './component/documentacion/documentacion.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ConfiguracionComponent } from './component/configuracion/configuracion.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirige a home por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }