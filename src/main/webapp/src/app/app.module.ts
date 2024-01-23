import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Police
import { PoliceComponent } from './police/police.component';
import { PoliceAddComponent } from './police/police-add/police-add.component';
import { PoliceListComponent } from './police/police-list/police-list.component';
//Phonecase
import { PhonecaseComponent } from './phonecase/phonecase.component';
import { PhonecaseAddComponent } from './phonecase/phonecase-add/phonecase-add.component';
import { PhonecaseListComponent } from './phonecase/phonecase-list/phonecase-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PoliceService } from './police/police.service';
import { PhonecaseService } from './phonecase/phonecase.service';
@NgModule({
  declarations: [
    AppComponent,
    PoliceComponent,
    PoliceAddComponent,
    PoliceListComponent,
    PhonecaseComponent,
    PhonecaseAddComponent,
    PhonecaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PoliceService, PhonecaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
