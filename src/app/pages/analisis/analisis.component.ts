import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
import { HostListener } from '@angular/core';
import {ConsultarService} from '../../services/consultar.service';


@Component({
  selector: 'app-analisis',
  standalone: false,

  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {


  candidatos: string[] = [
    'Daniel Noboa',
    'Luisa González',
    'Andrea González',
    'Pedro Granja',
    'Henry Kronfle',
    'Francesco Tabbachi',
    'Henry Cucalón',
    'Leonidas Iza',
    'Jimmy Jairala',
    'Jorge Escalada',
    'Luis Felipe Tillería',
    'Carlos Rabascall',
    'Juan Iván Cueva',
    'Víctor Araus',
    'Enrique Gómez',
    'Iván Saquicela',
  ]

  partidos = [
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

  fuentes: string[] = ['Youtube', 'Reddit', 'Facebook']
  candidatoSeleccionado: any | null = null;
  mostrarResultados: boolean = false;
  datosAceptacion: number[] = [0, 0, 0, 0, 0]; // Se actualizarán con la API
  cargando: boolean = false; // Para mostrar la pantalla de carga
  presenciaRedes: any[] = [];

  generarDatosRedes() {
    this.presenciaRedes = this.fuentes.map(fuente => ({
      fuente,
      porcentaje: Math.floor(Math.random() * 100) + 1
    }));
  }

  constructor( private consultarService: ConsultarService) {
    this.generarDatosRedes();
    console.log('hola');
  }
  async comenzarAnalisis(event: Event) {
    event.preventDefault();
    console.log('Candidato seleccionado:', this.seleccionCandidatos[0]);
    if (this.seleccionCandidatos.length < 1) {
      console.warn('Debes seleccionar un candidato.');
      return;
    }

    const candidato = this.seleccionCandidatos[0];
    const query = `${candidato} elecciones presidenciales 2025`
    console.log(`Consultando API con: ${query}`);
    console.log('Candidato seleccionado:', candidato);
    this.cargando = true; // Mostrar pantalla de carga
    try {
      const response = await this.consultarService.consultarSentimiento(query).toPromise();
      console.log('Respuesta API:', response);
      // Buscar el candidato en la lista de partidos

      if (response.conteo && response.total_comentarios > 0) {
        // Almacenar los valores de conteo en el orden esperado por la gráfica
        this.datosAceptacion = [
          response.conteo['Muy Positivo'] || 0,
          response.conteo['Positivo'] || 0,
          response.conteo['Neutro'] || 0,
          response.conteo['Negativo'] || 0,
          response.conteo['Muy Negativo'] || 0
        ];




        if (this.candidatoSeleccionado) {
          this.candidatoSeleccionado.imagen = `/assets/images/candidatos/${this.candidatoSeleccionado.imagen}`;
          console.log("imagen candidato: ", this.candidatoSeleccionado.imagen);
        }

        setTimeout(() => {
          this.generarGraficaAceptacion();
          this.generarGraficaRedes();
        }, 500);

      } else {
        console.warn('No se encontraron datos suficientes.');
      }
    } catch (error) {
      console.error('Error en la consulta:', error);
    } finally {
      this.cargando = false; // Ocultar pantalla de carga
    }




  }
  //
  // ngAfterViewInit() {
  //   console.log('La vista se ha cargado');
  //   this.generarGraficaAceptacion();
  //   this.generarGraficaRedes();
  // }

  generarGraficaAceptacion() {
    const canvas = document.getElementById('graficoAceptacion') as HTMLCanvasElement;
    if (!canvas) {
      console.error('No se encontró el elemento del canvas. Esperando más tiempo...');
      setTimeout(() => this.generarGraficaAceptacion(), 500);
      return;
    }
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Muy Bueno', 'Bueno', 'Neutral', 'Malo', 'Muy Malo'],
        datasets: [{
          label: 'Nivel de Aceptación (%)',
          data: this.datosAceptacion,
          backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF5722', '#D32F2F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#000000',  // Texto blanco en la leyenda
              font: {
                size: 16  // Tamaño de fuente más grande
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#FFFFFF',  // Texto blanco en el eje X
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
                size: 14  // Tamaño de fuente más grande
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

  generarGraficaRedes() {
    const ctx = document.getElementById('graficoRedes') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.presenciaRedes.map(r => r.fuente),
        datasets: [{
          label: 'Presencia en Redes Sociales (%)',
          data: this.presenciaRedes.map(r => r.porcentaje),
          backgroundColor: ['#FF0000', '#FF4500', '#3b5998']
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#000000',  // Texto blanco en la leyenda
              font: {
                size: 16  // Tamaño de fuente más grande
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#FFFFFF',  // Texto blanco en el eje X
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
              color: '#000000',  // Texto blanco en el eje Y
              font: {
                size: 14  // Tamaño de fuente más grande
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


  seleccionCandidatos: string[] = [];
  seleccionFuentes: string[] = [];

  mostrarCandidatos: boolean = false;
  mostrarFuentes: boolean = false;

  @HostListener('document:click', ['$event'])
  clickFuera(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.mostrarCandidatos = false;
      this.mostrarFuentes = false;
    }
  }

  toggleSeleccion(lista: string[], item: string) {
    if (item === 'Seleccionar Todos') {
      if (lista.length === this.candidatos.length) {
        lista.length = 0;  // Desmarcar todo
      } else {
        lista.length = 0;
        lista.push(...this.candidatos);  // Seleccionar todos
      }
    } else if (item === 'Seleccionar Todas') {
      if (lista.length === this.fuentes.length) {
        lista.length = 0;
      } else {
        lista.length = 0;
        lista.push(...this.fuentes);
      }
    } else {
      if (lista.includes(item)) {
        lista.splice(lista.indexOf(item), 1);
      } else {
        lista.push(item);
      }
    }
  }


}
