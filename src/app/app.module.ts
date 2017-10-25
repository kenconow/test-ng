import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuModule, ContextMenuModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    ContextMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
