import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { HomeModule } from './features/home/home.module';
import { DetailsModule } from './features/details/details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
