import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { AcercaDePage } from './acerca-de/acerca-de.page';
import { RegistroPage } from './registro/registro.page';
import { CartaPage } from './carta/carta.page';
import { AnadirPage } from './anadir/anadir.page';


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
    path: 'login',
    component: LoginPage
  },
  {
    path: 'acerca-de',
    component: AcercaDePage
  },
  {
    path: 'registro',
    component: RegistroPage
  },
  { path: 'carta',
   component: CartaPage
  },
  { path: 'anadir', 
component: AnadirPage
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
