import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/en';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
