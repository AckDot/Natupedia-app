import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlantasPage } from '../pages/Plantas/plantas';
import { DiagnosticoPage } from '../pages/diagnostico/diagnostico';
import {InformacionPage} from '../pages/informacion/informacion';
import { consultaDiagnosticoPage } from '../pages/consultaDiagnostico/consultaDiagnostico';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PlantasPage,
    DiagnosticoPage,
    InformacionPage,
    consultaDiagnosticoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PlantasPage,
    DiagnosticoPage,
    InformacionPage,
    consultaDiagnosticoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
