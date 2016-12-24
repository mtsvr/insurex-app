/**
 * Created by matias on 23-12-16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteDashboardComponent } from './cliente/cliente-dashboard/cliente-dashboard.component';
import { PolizasComponent } from './cliente/polizas/polizas.component';
import { VerPolizaComponent } from './cliente/polizas/ver-poliza/ver-poliza.component';
import { PolizaDetailWrapperComponent } from './cliente/polizas/poliza-detail-wrapper/poliza-detail-wrapper.component';
import { PolizaDetailComponent } from './cliente/polizas/poliza-detail/poliza-detail.component';
import { PolizaCuotasComponent } from './cliente/polizas/poliza-cuotas/poliza-cuotas.component';
import { PolizaEndososComponent } from './cliente/polizas/poliza-endosos/poliza-endosos.component';
import { CobranzaComponent } from './cliente/cobranza/cobranza.component';
import { DocsPendComponent } from './cliente/docs-pend/docs-pend.component';

import { CorredorComponent } from './corredor/corredor.component';
import { CorredorDashboardComponent } from './corredor/corredor-dashboard/corredor-dashboard.component';
import { CuentasClienteComponent } from './corredor/cuentas-cliente/cuentas-cliente.component';
import { DocsClienteComponent } from './corredor/docs-cliente/docs-cliente.component';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CuentasCorredorComponent } from './admin/cuentas-corredor/cuentas-corredor.component';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'cuentas', component: CuentasCorredorComponent },
];

const clienteRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ClienteDashboardComponent },
  { path: 'polizas', component: PolizasComponent,
    children: [
      { path: '', redirectTo: 'ver', pathMatch: 'full' },
      { path: 'ver', component: VerPolizaComponent },
      { path: 'ver/:id', component:  PolizaDetailWrapperComponent,
        children: [
          { path: '', component:  PolizaDetailComponent },
          { path: 'cuotas', component:  PolizaCuotasComponent },
          { path: 'endosos', component:  PolizaEndososComponent },
        ]
      },
    ]
  },
  { path: 'cobranza', component: CobranzaComponent },
  { path: 'pendientes', component: DocsPendComponent },
];

const corredorRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: CorredorDashboardComponent },
  { path: 'cuentas', component: CuentasClienteComponent },
  { path: 'docs', component: DocsClienteComponent },
];

const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, children: adminRoutes },
  { path: 'cliente', component: ClienteComponent, children: clienteRoutes },
  { path: 'corredor', component: CorredorComponent, children: corredorRoutes },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
