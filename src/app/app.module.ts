import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductLisComponent } from './products/product-list.component'

import  { FormsModule } from  '@angular/forms'
import { convertToSpacesPipe } from 'src/app/shared/convert-to-spaces..pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';

@NgModule({
  //all the components of modules will be registered here
  declarations: [
    AppComponent,
    ProductLisComponent,
    convertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  //eternal modules that we what the registered comps to have
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  //which module will be  bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
