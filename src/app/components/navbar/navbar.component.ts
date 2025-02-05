import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = true; // Estado inicial: navbar abierto

  // Función para alternar el estado del navbar
  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
