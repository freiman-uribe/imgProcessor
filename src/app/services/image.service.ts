import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = `${environment.apiUrl}/images`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `${token}`);
  }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers });
  }

  searchImages(startDate: string, endDate: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/search`, {
      headers,
      params: { startDate, endDate },
    });
  }

  getImageCountByDate(date: string): Observable<any> {
    const headers = this.getHeaders();
    const params = new HttpParams().set('date', date);
    return this.http.get(`${this.apiUrl}/count`, { headers, params }).pipe(
      catchError((error) => {
        console.error('Error retrieving image count by date', error);
        return throwError(error);
      })
    );
  }
}
