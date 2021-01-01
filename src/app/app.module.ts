import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import {ConvertToSpacesPipe}  from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {RouterModule} from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products',component: ProductsComponent},
      {path: 'products:/id',component: ProductDetailComponent },
      {path: 'welcome',component: WelcomeComponent},
      {path: '', redirectTo : 'welcome',pathMatch: 'full' },
      {path: '**',redirectTo: 'welcome',pathMatch:'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
