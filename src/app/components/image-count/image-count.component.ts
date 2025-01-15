import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { ImageService } from '../../services/image.service';

Chart.register(...registerables)

@Component({
  selector: 'app-image-count',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './image-count.component.html',
  styleUrl: './image-count.component.css',
})
export class ImageCountComponent implements OnInit {
  @ViewChild('barChart') barChartRef!: ElementRef;
  @ViewChild('lineChart') lineChartRef!: ElementRef;

  selectedDate: Date = new Date();
  maxDate: Date = new Date();
  barChart: Chart | undefined;
  lineChart: Chart | undefined;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.fetchData(this.selectedDate);
  }

  onDateChange(): void {
    this.fetchData(this.selectedDate);
  }

  fetchData(date: Date): void {
    this.imageService
      .getImageCountByDate(date.toISOString().split('T')[0])
      .subscribe(
        (response) => {
          const counts = response.map((item: any) => item.count);
          const hours = response.map((item: any) => item.Hora.toString());
          
          if (this.barChart) {
            this.barChart.destroy();
          }
          if (this.lineChart) {
            this.lineChart.destroy();
          }

          this.createBarChart(hours, counts);
          this.createLineChart(hours, counts);
        },
        (error) => {
          console.error('Error retrieving image count', error);
        }
      );
  }

  createBarChart(labels: string[], data: number[]): void {
    this.barChart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar' as ChartType,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Image Count',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Horas',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad',
            },
          },
        },
      } as ChartConfiguration['options'],
    });
  }

  createLineChart(labels: string[], data: number[]): void {
    this.lineChart = new Chart(this.lineChartRef.nativeElement, {
      type: 'line' as ChartType,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Image Count',
            data: data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Horas',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cantidad',
            },
          },
        },
      } as ChartConfiguration['options'],
    });
  }
}
