import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homead/home-page/home-page.component';
import { ListApartmentComponent } from './homead/list-apartment/list-apartment.component';
import { CreateApartmentComponent } from './homead/create-apartment/create-apartment.component';
import { DisplayApartmentComponent } from './homead/list-apartment/display-apartment/display-apartment.component';
import { ApartmentDetailsComponent } from './homead/apartment-details/apartment-details.component';
import { LogInPageComponent } from './homead/log-in-page/log-in-page.component';
import { HelpPageComponent } from './homead/help-page/help-page.component';
import { SearchApartmentComponent } from './homead/home-page/search-apartment/search-apartment.component';
import { ApartmentService } from './shared/apartment.service';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    IconsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
