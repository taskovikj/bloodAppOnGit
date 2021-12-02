import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { PhotoSliderComponent } from './photo-slider/photo-slider.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { RecorderComponent } from './recorder/recorder.component';
import { DonatingFactsComponent } from './donating-facts/donating-facts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatCarouselModule } from '@ngmodule/material-carousel'; // ---------- Important
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { LocationsComponent } from './locations/locations.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HomeCardsComponent,
    PhotoSliderComponent,
    FooterComponent,
    TestComponentComponent,
    RecorderComponent,
    DonatingFactsComponent,
    ContactUsComponent,
    LocationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    CarouselModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
