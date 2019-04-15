import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Componentes
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { ListPage } from './list/list.page';
import { RegistroPage } from './registro/registro.page';

// Servicios
import { VuelosService } from './services/vuelos.service';
import { UsuarioService } from './services/usuario.service';

// Modulos
import { FormsModule } from '@angular/forms';
import { AcercaDePage } from './acerca-de/acerca-de.page';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [AppComponent, LoginPage, HomePage, ListPage, AcercaDePage, RegistroPage],
  entryComponents: [LoginPage, HomePage, ListPage, AcercaDePage, RegistroPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    VuelosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
