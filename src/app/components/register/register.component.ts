import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  username: string = '';
  password: string = '';
  userType: string = 'Client';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService
      .register(this.name, this.username, this.password, this.userType)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error registering', error);
        }
      );
  }
}
