import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { AboutModule } from './about/about.module';
import { ErrorInterceptor } from './books/shared/error.interceptor';
import { PreloadDelayed } from './shared/preload-delayed';

@NgModule({
  declarations: [AppComponent, MyNavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    PreloadDelayed
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
