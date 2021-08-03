import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateApartmentComponent } from './homead/create-apartment/create-apartment.component';
import { HelpPageComponent } from './homead/help-page/help-page.component';
import { HomePageComponent } from './homead/home-page/home-page.component';
import { ListApartmentComponent } from './homead/list-apartment/list-apartment.component';
import { LogInPageComponent } from './homead/log-in-page/log-in-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: ListApartmentComponent },
  { path: 'create', component: CreateApartmentComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'edit/:id', component: CreateApartmentComponent },
  { path: 'login', component: LogInPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
