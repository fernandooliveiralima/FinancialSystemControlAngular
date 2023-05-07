import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'
import {DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core'
import ptBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

/* imports pages */
import { HomeComponent } from './components/pages/home/home.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';


/* imports components */
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';

import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,

    /* pages */
    HomeComponent,
    TransactionsComponent,

    /* components */
    HeaderComponent,
     MainComponent,
     
     TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
