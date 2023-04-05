import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Você precisa importar o HomeModule no arquivo
em questão porque ele é um módulo separado
que contém componentes, diretivas, serviços ou
outros recursos que você deseja utilizar no módulo atual. */


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
