import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'' , redirectTo:"home" , pathMatch:'full'},
  {path:'home' , loadComponent: ()=> import('./featured/pages/home/home.component').then(c => c.HomeComponent) , title:"Home"},
  {path:'about' , loadComponent: ()=> import('./featured/pages/about/about.component').then(c => c.AboutComponent), title:"About"},
  {path:'projects' , loadComponent: ()=> import('./featured/pages/projects/projects.component').then(c => c.ProjectsComponent) , title:"Projects"},
  {path:'contact' , loadComponent: ()=> import('./featured/pages/contact-me/contact-me.component').then(c => c.ContactMeComponent) , title:"Contact"},
];
