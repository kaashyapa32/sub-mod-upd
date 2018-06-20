import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubmodModule } from './submod/submod.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubmodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
