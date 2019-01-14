import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import  { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component'; 
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderpickupComponent } from './orderpickup/orderpickup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowusComponent } from './followus/followus.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: '', component: HomeComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'orderpickup', component: OrderpickupComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'followus', component: FollowusComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
