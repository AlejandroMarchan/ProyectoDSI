import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { AcercaDePage } from './acerca-de/acerca-de.page';
import { RegistroPage } from './registro/registro.page';
import { CartaPage } from './carta/carta.page';
import { AnadirPage } from './anadir/anadir.page';
import { MenuComidaPage } from './menu-comida/menu-comida.page';
import { NuevoMenuPage } from './nuevo-menu/nuevo-menu.page';


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
},
  { path: 'menu-comida', component: MenuComidaPage
},
  { path: 'nuevo-menu',
   component: NuevoMenuPage }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
