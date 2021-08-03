import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homead/home-page/home-page.component';
import { ListApartmentComponent } from './homead/list-apartment/list-apartment.component';
import { CreateApartmentComponent } from './homead/create-apartment/create-apartment.component';
import { DisplayApartmentComponent } from './homead/display-apartment/display-apartment.component';
import { ApartmentDetailsComponent } from './homead/apartment-details/apartment-details.component';
import { LogInPageComponent } from './homead/log-in-page/log-in-page.component';
import { HelpPageComponent } from './homead/help-page/help-page.component';
import { SearchApartmentComponent } from './homead/home-page/search-apartment/search-apartment.component';
import { IconsModule } from './icons/icons.module';
IconsModule;

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListApartmentComponent,
    CreateApartmentComponent,
    DisplayApartmentComponent,
    ApartmentDetailsComponent,
    LogInPageComponent,
    HelpPageComponent,
    SearchApartmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbCollapseModule, IconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
