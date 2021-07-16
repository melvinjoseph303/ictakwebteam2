import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PartnershipformComponent } from './partnershipform/partnershipform.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'partnership',
    component: PartnershipComponent
  },
  {
    path: 'partnershipform',
    component: PartnershipformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
