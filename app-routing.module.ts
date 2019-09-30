import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SchoolComponent } from './school/school.component';
import { HospetalComponent } from './hospetal/hospetal.component';
import { HomeComponent } from './home/home.component';
import { AdmistionsComponent } from './admistions/admistions.component';

const routes: Routes = [{path:'about',component:AboutComponent,
children:[
  {path:'school',component:SchoolComponent,
    children:[{path:'admissions',component:AdmistionsComponent}]},
  {path:'hospetal',component:HospetalComponent}
    // children:'admissions'
] },   
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
