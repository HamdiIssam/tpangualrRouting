import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';





  const routes: Routes = [
    {path :'Accueil',
  loadChildren:()=>import ('./accueil/accueil.module').then(p=>p.AccueilModule)},
   {path :'Cours',
  loadChildren:()=>import ('./accueil/cours/cours.module').then(p=>p.CoursModule)},
  {path :'Ressources',
  loadChildren:()=>import ('./accueil/ressources/ressources.module').then(p=>p.RessourcesModule)},
  {path :'Contact',
  loadChildren:()=>import ('./accueil/contact/contact.module').then(p=>p.ContactModule)},
  {path:'**',component:ErrorComponent},
  

  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
