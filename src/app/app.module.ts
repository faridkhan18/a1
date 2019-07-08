import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductLisComponent } from './products/product-list.component'

import  { FormsModule } from  '@angular/forms'
import { convertToSpacesPipe } from 'src/app/shared/convert-to-spaces..pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router'


@NgModule({
  //all the components of modules will be registered here
  declarations: [
    AppComponent,
    ProductLisComponent,
    convertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent

  ],
  //eternal modules that we what the registered comps to have
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductLisComponent},
      { path:  'products/:id', component: ProductDetailsComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ])
  ],
  providers: [],
  //which module will be  bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
