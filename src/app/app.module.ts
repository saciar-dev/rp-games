import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { SecuenciaGameComponent } from './secuencia-game/secuencia-game.component';
import { AritmeticaGameComponent } from './aritmetica-game/aritmetica-game.component';
import { ClasificacionGameComponent } from './clasificacion-game/clasificacion-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    NavegacionComponent,
    MemoryGameComponent,
    SecuenciaGameComponent,
    AritmeticaGameComponent,
    ClasificacionGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
