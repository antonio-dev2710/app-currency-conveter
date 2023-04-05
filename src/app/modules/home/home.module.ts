import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componenets
import { HeaderComponent } from './components/header/header.component';
import { ValuePanelComponent } from './components/value-panel/value-panel.component';
import { CurrencyFormComponent } from './components/currency-form/currency-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversorMoedaComponent } from './components/conversor-moeda/conversor-moeda.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ValuePanelComponent,
    CurrencyFormComponent,
    HomeComponent,
    ConversorMoedaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
