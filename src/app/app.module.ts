import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmetteurComponent } from './emetteur/emetteur.component';
import { RecepteurComponent } from './recepteur/recepteur.component';
import { OperationComponent } from './operation/operation.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmetteurComponent,
    RecepteurComponent,
    OperationComponent,
    HeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
