import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile: File | null = null;
  isUploading: boolean = false;
  fileName: string = '';

  constructor(private imageService: ImageService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      this.selectedFile = file;
      this.fileName = file.name;
    } else {
      this.selectedFile = null;
      this.fileName = '';
      alert('Solo se permiten archivos JPG o JPEG');
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.isUploading = true;

      this.imageService.uploadImage(this.selectedFile).subscribe(
        (event: any) => {
          this.isUploading = false;
          this.selectedFile = null;
          this.fileInput.nativeElement.value = '';
          this.fileName = '';

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: 'success',
            title: 'Imagen cargada con éxito',
          });
        },
        (error) => {
          console.error('Error uploading image', error);
          this.isUploading = false;
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: 'error',
            title: 'Error al cargar la imagen',
          });
        }
      );
    }
  }
}
