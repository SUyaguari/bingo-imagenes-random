import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { GridComponent } from './grid/grid.component';
import { NumerosComponent } from './numeros/numeros.component';

const routes: Routes = [
  {path: "aleatorio", component: AleatorioComponent},
  {path: "grid", component: GridComponent},
  {path: 'num', component: NumerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
