import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ImageCountComponent } from './components/image-count/image-count.component';

export const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: ImageUploadComponent, canActivate: [authGuard] },
  { path: 'search', component: SearchComponent, canActivate: [authGuard] },
  { path: 'count', component: ImageCountComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/upload' },
];
