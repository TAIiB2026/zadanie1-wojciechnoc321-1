import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneComponent } from './drone/drone.component';
import { ZwiekszOnHoverDirective } from './zwieksz-on-hover.directive';
import {MojaListaComponent} from "./moja-lista/moja-lista.component";

@NgModule({
  declarations: [
    AppComponent,
    DroneComponent,
    ZwiekszOnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MojaListaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
