<<<<<<< Updated upstream

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
  

  {path:'**',redirectTo:'home'}
];
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< Updated upstream
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> Stashed changes
