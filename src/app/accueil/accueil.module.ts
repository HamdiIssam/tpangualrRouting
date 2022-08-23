import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { CoursComponent } from './cours/cours.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    CoursComponent,
    RessourcesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule
  ]
})
export class AccueilModule { }
