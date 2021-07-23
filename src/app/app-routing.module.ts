import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PartnershipformComponent } from './partnershipform/partnershipform.component';
import { AcademicmembershipComponent } from './academicmembership/academicmembership.component';
import { CorporatemembershipComponent } from './corporatemembership/corporatemembership.component';
import { CorporatemembershipcontactusformComponent } from './corporatemembershipcontactusform/corporatemembershipcontactusform.component';
import { CorporatemembershipregisternowformComponent } from './corporatemembershipregisternowform/corporatemembershipregisternowform.component';
import { ViewacademicmembersComponent } from './viewacademicmembers/viewacademicmembers.component';
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
  },
  {
    path: 'academicmembership',
    component: AcademicmembershipComponent
  },
  {
    path: 'corporatemembership',
    component: CorporatemembershipComponent
  },
  {
    path: 'contactus',
    component: CorporatemembershipcontactusformComponent
  },
  {
    path: 'registernow',
    component: CorporatemembershipregisternowformComponent
  },
  {
    path: 'viewacademicmembers',
    component: ViewacademicmembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
