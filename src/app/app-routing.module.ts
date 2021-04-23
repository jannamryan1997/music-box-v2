import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
