import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliceAddComponent } from './police/police-add/police-add.component';
import { PoliceListComponent } from './police/police-list/police-list.component';
import { PhonecaseAddComponent } from './phonecase/phonecase-add/phonecase-add.component';
import { PhonecaseListComponent } from './phonecase/phonecase-list/phonecase-list.component';

const routes: Routes = [
	{path: 'addPolice', component: PoliceAddComponent},
	{path: 'viewPolice', component: PoliceListComponent},
	{path: 'addPhonecase', component: PhonecaseAddComponent},
	{path: 'viewPhonecase', component: PhonecaseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
