import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componenets
import { HeaderComponent } from './components/header/header.component';
import { ValuePanelComponent } from './components/value-panel/value-panel.component';

import { HomeComponent } from './pages/home/home.component';
import { InputConversaoComponent } from './components/input-conversao/input-conversao.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ValuePanelComponent,

    HomeComponent,
    InputConversaoComponent


  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
