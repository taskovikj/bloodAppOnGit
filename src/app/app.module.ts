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
    DonatingFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
