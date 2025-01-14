import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-upload',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
})
export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private imageService: ImageService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.imageService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
}
