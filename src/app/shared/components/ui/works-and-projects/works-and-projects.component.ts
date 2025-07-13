import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { IProject } from '../../../interfaces/project';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-works-and-projects',
  imports: [ProjectCardComponent],
  templateUrl: './works-and-projects.component.html',
  styleUrl: './works-and-projects.component.css'
})
export class WorksAndProjectsComponent {

    private _PLATFORM_ID = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }

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
