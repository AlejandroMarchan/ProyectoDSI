import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Páginas
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { RegistroPage } from './registro/registro.page';
import { CartaPage } from './carta/carta.page';
import { AnadirPage } from './anadir/anadir.page';
import { MenuComidaPage } from './menu-comida/menu-comida.page';
import { NuevoMenuPage } from './nuevo-menu/nuevo-menu.page';
import { PerfilPage } from './perfil/perfil.page';
import { ActualizarPerfilPage } from './actualizar-perfil/actualizar-perfil.page';
import { ContrasenaPage } from './contrasena/contrasena.page';
import { RankingPage } from './ranking/ranking.page';
import { MisBonosPage } from './mis-bonos/mis-bonos.page';
import { CanjearBonosPage } from './canjear-bonos/canjear-bonos.page';

// Servicios
import { UsuarioService } from './services/usuario.service';
import { MenuService } from './services/menu.service';
import { CartaService } from './services/carta.service';

// Modulos
import { FormsModule } from '@angular/forms';
import { AcercaDePage } from './acerca-de/acerca-de.page';
import { HttpModule }    from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [AppComponent, LoginPage, HomePage, AcercaDePage, RegistroPage, CartaPage, AnadirPage, MenuComidaPage, NuevoMenuPage, PerfilPage, ActualizarPerfilPage, ContrasenaPage, RankingPage, MisBonosPage, CanjearBonosPage],
  entryComponents: [LoginPage, HomePage, AcercaDePage, RegistroPage, CartaPage, AnadirPage, MenuComidaPage, NuevoMenuPage, PerfilPage, ActualizarPerfilPage, ContrasenaPage, RankingPage, MisBonosPage, CanjearBonosPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsuarioService,
    MenuService,
    CartaService,
    QRScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
