import {AfterViewInit, Component} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-resumen',
  standalone: false,

  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Gráfico de barras - Top búsquedas en redes sociales
    new Chart("topBusquedaChart", {
      type: 'bar',
      data: {
        labels: ["Daniel Noboa", "Luisa Gonzales", "Andrea Gonzales", "Juan Cueva", "Jorge Cucalon"],
        datasets: [{
          label: "Porcentaje de búsqueda",
          data: [45, 35, 13, 5, 2],
          backgroundColor: ["#1E3A8A", "#2563EB", "#60A5FA", "#93C5FD", "#BFDBFE"],
          borderWidth: 1
        }]
      }
    });

    // Gráfico de barras horizontal - Nivel de aceptación
    new Chart("nivelAceptacionChart", {
      type: 'bar',
      data: {
        labels: ["Daniel Noboa", "Luisa Gonzales", "Andrea Gonzales", "Otros"],
        datasets: [{
          label: "Nivel de aceptación",
          data: [45, 35, 15, 5],
          backgroundColor: ["#1E3A8A", "#2563EB", "#60A5FA", "#BFDBFE"],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            ticks: {
              color: '#000000',  // Texto blanco en el eje X
              font: {
                size: 14  // Tamaño de fuente más grande
              }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'  // Líneas de la grilla más suaves
            }
          },
          y: {
            ticks: {
              color: '#000',  // Texto blanco en el eje Y
              font: {
                size: 16  // Tamaño de fuente más grande
              }
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)'  // Líneas de la grilla más suaves
            }
          }
        }
      }

    });

  }
}
