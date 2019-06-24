import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  //all the components of modules will be registered here
  declarations: [
    AppComponent
  ],
  //eternal modules that we what the registered comps to have
  imports: [
    BrowserModule
  ],
  providers: [],
  //which module will be  bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
