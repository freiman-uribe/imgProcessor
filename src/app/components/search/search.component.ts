import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
  maxDate: Date = new Date();
  images: any[] = [];

  constructor(private imageService: ImageService) {}

  onSearch(): void {
    if (this.startDate && this.endDate) {
      const startDateStr = this.startDate.toISOString().split('T')[0];
      const endDateStr = this.endDate.toISOString().split('T')[0];
      this.imageService.searchImages(startDateStr, endDateStr).subscribe(
        (response) => {
          this.images = response;
          console.log('Images retrieved successfully', response);
        },
        (error) => {
          console.error('Error retrieving images', error);
        }
      );
    }
  }
}
