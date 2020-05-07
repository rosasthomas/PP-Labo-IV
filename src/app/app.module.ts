import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { HttpClientModule} from '@angular/common/http'
import {ServicioPaisesService} from './servicios/servicio-paises.service';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component'
 
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    PaisesListadoComponent,
    TablaPaisesComponent,
    DetallePaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioPaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
