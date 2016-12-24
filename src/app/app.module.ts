import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

import { RoutingModule } from './routing.module'

import { AppComponent } from './app.component';

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
import {AuthService} from "./services/auth.service";



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    CorredorComponent,
    AdminComponent,
    LoginComponent,
    PolizasComponent,
    CobranzaComponent,
    DocsPendComponent,
    CuentasClienteComponent,
    DocsClienteComponent,
    CuentasCorredorComponent,
    VerPolizaComponent,
    PolizaDetailComponent,
    ClienteDashboardComponent,
    AdminDashboardComponent,
    CorredorDashboardComponent,
    PolizaCuotasComponent,
    PolizaEndososComponent,
    PolizaDetailWrapperComponent,

    PdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
