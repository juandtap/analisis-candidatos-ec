import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { CandidatosComponent } from './pages/candidatos/candidatos.component';
import { ResumenComponent } from './pages/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnalisisComponent,
    HeaderComponent,
    AboutComponent,
    CandidatosComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
