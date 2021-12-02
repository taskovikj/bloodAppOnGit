import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonatingFactsComponent } from './donating-facts/donating-facts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecorderComponent } from './recorder/recorder.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { LocationsComponent } from './locations/locations.component';

const routes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'test',component:TestComponentComponent},
  {path:'recorder-article',component:RecorderComponent},
  {path:'donating-facts',component:DonatingFactsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'locations',component:LocationsComponent}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
