import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'servicos',
    loadComponent: () => import('./servicos/servicos.page').then(m => m.ServicosPage) 
  },
  {
    path: 'planos', 
    loadComponent: () => import('./planos/planos.page').then(m => m.PlanosPage) 
  },
  {
    path: 'localizacao', 
    loadComponent: () => import('./localizacao/localizacao.page').then(m => m.LocalizacaoPage) 
  },
  {
    path: 'agenda', 
    loadComponent: () => import('./agenda/agenda.page').then(m => m.AgendaPage) 
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'planos',
    loadComponent: () => import('./planos/planos.page').then( m => m.PlanosPage)
  },
  {
    path: 'localizacao',
    loadComponent: () => import('./localizacao/localizacao.page').then( m => m.LocalizacaoPage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then( m => m.AgendaPage)
  },
];
