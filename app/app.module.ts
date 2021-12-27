import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlantasPage } from '../pages/Plantas/plantas';
import { DiagnosticoPage } from '../pages/diagnostico/diagnostico';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PlantasPage,
    DiagnosticoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PlantasPage,
    DiagnosticoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
