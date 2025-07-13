import { Component } from '@angular/core';
import { ISkils } from '../../../../../shared/interfaces/Iskils';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-skils',
  imports: [CarouselModule],
  templateUrl: './my-skils.component.html',
  styleUrl: './my-skils.component.css',
})
export class MySkilsComponent {
  skils: ISkils[] = [
    {
      name: 'HTML',
      image: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
    },
    {
      name: 'CSS',
      image: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
    },
    {
      name: 'Bootstrap',
      image:
        'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg',
    },

    {
      name: 'Tailwind',
      image:
        'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'JavaScript',
      image: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
    },
    {
      name: 'Jquery',
      image: 'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg',
    },
    {
      name: 'SASS',
      image: 'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg',
    },
    {
      name: 'Typescript',
      image:
        'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
    },

    {
      name: 'Angular',
      image: 'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
    },
    {
      name: 'GitHub',
      image: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
    },
    {
      name: 'Git',
      image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 1030,
    autoplaySpeed: 1000,
    navSpeed: 200,
    pullDrag: false,
    dots: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 7,
      },
    },
  };
}
