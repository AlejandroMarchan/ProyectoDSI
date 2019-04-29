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
import { PerfilPage } from './perfil/perfil.page';
import { ActualizarPerfilPage } from './actualizar-perfil/actualizar-perfil.page';
import { ContrasenaPage } from './contrasena/contrasena.page';
import { RankingPage } from './ranking/ranking.page';
import { PedidosadminPage } from './pedidosadmin/pedidosadmin.page';
import { PedidosusuarioPage } from './pedidosusuario/pedidosusuario.page';
import { MisBonosPage } from './mis-bonos/mis-bonos.page';
import { CanjearBonosPage } from './canjear-bonos/canjear-bonos.page';



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
  {
    path: 'carta',
    component: CartaPage
  },
  {
    path: 'anadir',
    component: AnadirPage
  },
  {
    path: 'menu-comida',
    component: MenuComidaPage
  },
  {
    path: 'nuevo-menu',
    component: NuevoMenuPage
  },
  {
    path: 'perfil',
    component: PerfilPage
  },
  {
    path: 'actualizar-perfil',
    component: ActualizarPerfilPage
  },
  {
    path: 'contrasena',
    component: ContrasenaPage
  },
  {
    path: 'pedidosadmin',
    component: PedidosadminPage
  },
  {
    path: 'pedidosusuario',
    component: PedidosusuarioPage
  },
  {
    path: 'perfil',
    component: PerfilPage
  },
  {
    path: 'actualizar-perfil',
    component: ActualizarPerfilPage
  },
  {
    path: 'contrasena',
    component: ContrasenaPage
  },
  {
    path: 'ranking',
    component: RankingPage
  },
  {
    path: 'mis-bonos',
    component: MisBonosPage
  },
  {
    path: 'canjear-bonos',
    component: CanjearBonosPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
