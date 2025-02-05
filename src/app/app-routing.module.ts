import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnalisisComponent} from './pages/analisis/analisis.component';
import {ResumenComponent} from './pages/resumen/resumen.component';
import {CandidatosComponent} from './pages/candidatos/candidatos.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: ResumenComponent },
  {path: 'resumen', component: ResumenComponent},
  {path: 'candidatos', component: CandidatosComponent},
  {path: 'about', component: AboutComponent},
  {path:'analisis', component: AnalisisComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
