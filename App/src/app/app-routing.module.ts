import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { ListPage } from './list/list.page';
import { LoginPage } from './login/login.page';
import { AcercaDePage } from './acerca-de/acerca-de.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'list',
    component: ListPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  { 
    path: 'acerca-de',
    component: AcercaDePage
  },  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
