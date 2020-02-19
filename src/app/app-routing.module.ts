import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PricingComponent } from './pricing/pricing.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SupportComponent } from './support/support.component';
import { OnprimiseComponent } from './onprimise/onprimise.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'prefix'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'solution', component: SolutionsComponent},
  {path: 'support', component: SupportComponent},
  {path: 'onprimise', component: OnprimiseComponent},
  {path: 'blog', component: BlogComponent},
  {path:'404', component: PagenotfoundComponent},
  {path:'**', redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
