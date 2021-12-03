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
import { LocationsComponent } from './locations/locations.component';
import { RegistersComponent } from './registers/registers.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { DeficitBtComponent } from './deficit-bt/deficit-bt.component';
import { ReserveComponent } from './reserve/reserve.component';
import { Toast, ToastrModule } from 'ngx-toastr';

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
    RegistersComponent,
    LoginComponent,
    DeficitBtComponent,
    ReserveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    CarouselModule,
    WavesModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
