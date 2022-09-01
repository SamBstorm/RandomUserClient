import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/RandomUser/details/details.component';
import { RandomUserInterceptor } from './interceptors/random-user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : RandomUserInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
