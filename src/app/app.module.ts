import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaFormComponent } from './agenda/agenda-form/agenda-form.component';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolBarComponent,
    QuemSomosComponent,
    AgendaComponent,
    AgendaFormComponent,
    OndeEstamosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
