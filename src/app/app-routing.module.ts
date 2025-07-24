
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component:AboutComponent},
  
  {path:"live-preview", loadComponent: () => import('./live-preview/live-preview.component').
    then(m => m.LivePreviewComponent)

  },

  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
