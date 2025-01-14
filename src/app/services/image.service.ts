import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = `http://localhost:3000/api/images`;
  private token =       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc4NTZlYjdiYjhlNzc2OTIzOTFmYmFlIn0sImlhdCI6MTczNjgwMTM2MywiZXhwIjoxNzM3MTYxMzYzfQ.Mr1PfIkIAouHUhAmGVeonXZOEU3YhHGiwUn6SHZo4O4';

  constructor(private http: HttpClient) {}

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    // const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('x-auth-token', this.token);
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers });
  }

  searchImages(startDate: string, endDate: string): Observable<any> {
    const headers = new HttpHeaders().set('x-auth-token', this.token);
    return this.http.get(`${this.apiUrl}/search`, {
      headers,
      params: { startDate, endDate },
    });
  }

  getImageStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }
}
