import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductLisComponent } from './products/product-list.component'

@NgModule({
  //all the components of modules will be registered here
  declarations: [
    AppComponent,
    ProductLisComponent
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
