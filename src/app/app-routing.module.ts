import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { SecuenciaGameComponent } from './secuencia-game/secuencia-game.component';
import { ClasificacionGameComponent } from './clasificacion-game/clasificacion-game.component';
import { AritmeticaGameComponent } from './aritmetica-game/aritmetica-game.component';

const routes: Routes = [ {
  path: '',
  component:PortadaComponent,
  pathMatch: 'full'
},
{
  path: 'memory',
  component: MemoryGameComponent
},
{
  path: 'secuencia',
  component: SecuenciaGameComponent
},
{
  path: 'clasificacion',
  component: ClasificacionGameComponent
},
{
  path: 'aritmetica',
  component: AritmeticaGameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
