import {Component, ViewChild} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'analisis-candidatos-ec';
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;
  @ViewChild(HeaderComponent) header!: HeaderComponent;
}
