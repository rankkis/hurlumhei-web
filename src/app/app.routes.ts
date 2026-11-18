import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, data: { lang: 'fi' } },
  { path: 'en', component: Home, data: { lang: 'en' } },
  { path: '**', redirectTo: '' },
];
