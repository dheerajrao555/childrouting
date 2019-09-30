import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SchoolComponent } from './school/school.component';
import { HospetalComponent } from './hospetal/hospetal.component';
import { HomeComponent } from './home/home.component';
import { AdmistionsComponent } from './admistions/admistions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SchoolComponent,
    HospetalComponent,
    HomeComponent,
    AdmistionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
