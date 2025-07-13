import { Component } from '@angular/core';
import { ISkils } from '../../../interfaces/Iskils';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { IProject } from '../../../interfaces/project';

@Component({
  selector: 'app-works-and-projects',
  imports: [ProjectCardComponent],
  templateUrl: './works-and-projects.component.html',
  styleUrl: './works-and-projects.component.css'
})
export class WorksAndProjectsComponent {

projects:IProject[]=[

  {
    name:"e-commerce",
    image:"images/projects/e-commers.png",
    link:"https://e-commerce-fresh-cart-rho.vercel.app/"
  },
  {
    name:"Social Media App",
    image:"images/projects/Social App.png",
    link:"https://soical-app.vercel.app/"
  },
  {
    name:"Note App",
    image:"images/projects/Note App.png",
    link:"https://note-app-ten-livid.vercel.app/"
  },

  {
    name:"Quiz App",
    image:"images/projects/Quiz App.png",
    link:"https://quiz-app-rho-ten-42.vercel.app/"
  },


  {
    name:"Recipe App",
    image:"images/projects/Resips.png",
    link:"https://recipe-using-sass-7dnh.vercel.app/"
  },

   {
    name:"Movie App",
    image:"images/projects/Movie App.png",
    link:"https://movie-app-nu-topaz.vercel.app/"
  },

]


}
