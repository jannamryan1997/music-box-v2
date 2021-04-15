import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)
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
