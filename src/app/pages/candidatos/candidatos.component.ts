import { Component } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  standalone: false,

  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.css'
})
export class CandidatosComponent {
  candidatos = [
    { nombre: 'Daniel Noboa', partido: 'Acción Democrática Nacional', imagen: 'Daniel Noboa-modified.png', aceptacion: 45 },
    { nombre: 'Luisa González', partido: 'Revolución Ciudadana - RETO', imagen: 'Luisa González-modified.png', aceptacion: 35 },
    { nombre: 'Andrea González', partido: 'Sociedad Patriótica', imagen: 'Andrea González-modified.png', aceptacion: 10 },
    { nombre: 'Pedro Granja', partido: 'Partido Socialista Ecuatoriano', imagen: 'Pedro Granja-modified.png', aceptacion: 1 },
    { nombre: 'Henry Kronfle', partido: 'Partido Social Cristiano', imagen: 'Henry Kronfle-modified.png', aceptacion: 2 },
    { nombre: 'Francesco Tabbachi', partido: 'CREO', imagen: 'Francesco Tabacchi-modified.png', aceptacion: 1 },
    { nombre: 'Henry Cucalón', partido: 'Construye', imagen: 'Henry Cucalón-modified.png', aceptacion: 1 },
    { nombre: 'Leonidas Iza', partido: 'Pachakutik', imagen: 'Leonidas Iza-modified.png', aceptacion: 1 },
    { nombre: 'Jimmy Jairala', partido: 'Centro Democrático', imagen: 'Jimmy Jairala-modified.png', aceptacion: 1 },
    { nombre: 'Jorge Escalada', partido: 'Unidad Popular', imagen: 'Jorge Escalada-modified.png', aceptacion: 1 },
    { nombre: 'Luis Felipe Tillería', partido: 'Avanza', imagen: 'Felipe Tillería-modified.png', aceptacion: 1 },
    { nombre: 'Carlos Rabascall', partido: 'Izquierda Democrática', imagen: 'Carlos Rabascall-modified.png', aceptacion: 1 },
    { nombre: 'Juan Iván Cueva', partido: 'AMIGO', imagen: 'Juan Cueva-modified.png', aceptacion: 1 },
    { nombre: 'Víctor Araus', partido: 'Pueblo, Igualdad y Democracia', imagen: 'Víctor Araus-modified.png', aceptacion: 1 },
    { nombre: 'Enrique Gómez', partido: 'SUMA', imagen: 'Enrique Gomez-modified.png', aceptacion: 1 },
    { nombre: 'Iván Saquicela', partido: 'Democracia Sí', imagen: 'Iván Saquicela-modified.png', aceptacion: 1 }
  ];
}
