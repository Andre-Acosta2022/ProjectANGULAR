import { Routes } from '@angular/router';
import { NabvarComponent } from './component/nabvar/nabvar.component';
import { EmpresaComponent } from './component/empresa/empresa.component';
import { SolicitudComponent } from './component/solicitud/solicitud.component';
import { DocumentacionComponent } from './component/documentacion/documentacion.component';
export const routes: Routes = [

    {
        path:'',
        component:NabvarComponent,
        title:'Home'
    },
    {
        path:'Solicitud',
        component:SolicitudComponent,
        title:'Solicitud'
    },
    {
        path:'DocumeNtacion',
        component:DocumentacionComponent,
        title:'Dcoumentacion'
    },
    {
        path:'Solicitud',
        component:SolicitudComponent,
        title:'Solicitud'
    },
    {
        path:'Solicitud',
        component:SolicitudComponent,
        title:'Solicitud'
    },

    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
