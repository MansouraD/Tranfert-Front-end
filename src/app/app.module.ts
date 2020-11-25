import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {TransfertService} from "./transfert.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationComponent } from './operation/operation.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    HeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TransfertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
