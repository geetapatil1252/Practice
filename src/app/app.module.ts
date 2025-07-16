import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DollarToRupeePipe } from './shared/custom-pipes/DollarToRupee/dollar-to-rupee.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
     AboutComponent,
     DollarToRupeePipe],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],


  bootstrap: [AppComponent]


})
export class AppModule { }
