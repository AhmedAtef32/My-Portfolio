import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { IProject } from '../../../interfaces/project';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-works-and-projects',
  imports: [ProjectCardComponent],
  templateUrl: './works-and-projects.component.html',
  styleUrl: './works-and-projects.component.css',
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

  projects: IProject[] = [
    {
      name: 'Egyptian Authority for Maritime Safety (EAMS)',
      image: 'images/projects/EAMS.png',
      link: 'https://www.eams.gov.eg/#/home',
      description:
        'A multilingual digital platform for the Egyptian Authority for Maritime Safety, enabling citizens to apply for seaman passports, check medical examination results, track passport collection, and access maritime services. The platform features dynamic multi-step forms, reusable form components (inputs, selects, file uploads), bilingual support, reusable UI architecture, and optimized performance for a seamless user experience.',
      technologies: [
        'Angular 19',
        'Angular Signals',
        'Tailwind CSS',
        'PrimeNG',
        'REST API',
        'i18n',
        'Dynamic Stepper',
        'Dynamic Forms',
        'Reusable Components',
      ],
    },

    {
      name: 'EAMS Dashboard (Private)',
      image: 'images/projects/EAMS CMS.png',
      link: '',
      description:
        'A role-based administration dashboard used to manage the EAMS platform, enabling administrators to control users, permissions, services, news, job postings, and website content through secure authentication, authorization, and complete CRUD operations.',
      technologies: [
        'Angular 19',
        'Angular Signals',
        'Tailwind CSS',
        'PrimeNG',
        'Authentication',
        'Guards',
        'CRUD',
        'REST API',
      ],
    },

    {
      name: 'Sputnik Academy CRM (Private)',
      image: 'images/projects/Sputnik.png',
      link: '',
      description:
        'A CRM system developed for managing educational operations, featuring secure Google OAuth authentication, refresh token strategy, dynamic multi-step forms, reusable UI components, and reactive state management for a scalable and maintainable user experience.',
      technologies: [
        'Angular 20',
        'Angular Signals',
        'OAuth',
        'PrimeNG',
        'Tailwind CSS',
        'Dynamic Forms',
        'RxJS',
      ],
    },

    {
      name: 'FreshCart E-Commerce',
      image: 'images/projects/e-commers.png',
      link: 'https://e-commerce-fresh-cart-rho.vercel.app/',
      description:
        'A fully responsive e-commerce application that allows users to browse products, manage shopping carts and wishlists, authenticate securely, complete checkout, and manage orders through a smooth and intuitive shopping experience.',
      technologies: [
        'Angular',
        'RxJS',
        'Tailwind CSS',
        'REST API',
        'Reactive Forms',
        'Authentication',
      ],
      github: 'https://github.com/AhmedAtef32/e_commerce_Fresh_Cart',
    },

    {
      name: 'Movie App',
      image: 'images/projects/Movie App.png',
      link: 'https://movie-app-nu-topaz.vercel.app/',
      description:
        'A movie discovery platform powered by TMDB, allowing users to browse trending movies and TV shows, search content, explore detailed information, watch official trailers, and enjoy a responsive modern interface.',
      technologies: [
        'Angular',
        'Angular Signals',
        'TMDB API',
        'PrimeNG',
        'Tailwind CSS',
      ],
      github: 'https://github.com/AhmedAtef32/Movie-App',
    },

    {
      name: 'Quiz App',
      image: 'images/projects/Quiz App.png',
      link: 'https://quiz-app-rho-ten-42.vercel.app/',
      description:
        'An interactive quiz platform featuring user authentication, timed quizzes, score tracking, API-driven questions, and responsive layouts designed to provide an engaging learning experience.',
      technologies: ['Angular', 'RxJS', 'REST API', 'PrimeNG', 'Tailwind CSS'],
      github: 'https://github.com/AhmedAtef32/Quiz-App',
    },
  ];
}
