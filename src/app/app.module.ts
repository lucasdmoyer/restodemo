import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // from npm install angular-in-memory-web-api --save
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PhotosComponent } from './photos/photos.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderpickupComponent } from './orderpickup/orderpickup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowusComponent } from './followus/followus.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pipe, PipeTransform } from '@angular/core'; 
import { MyFilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PhotosComponent,
    AboutusComponent,
    OrderpickupComponent,
    ContactusComponent,
    FollowusComponent,
    MyFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
