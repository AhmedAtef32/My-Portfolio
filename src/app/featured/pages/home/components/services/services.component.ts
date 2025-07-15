import { Component } from '@angular/core';
import { IService } from '../../../../../shared/interfaces/IService';
import { ServiceCArdComponent } from "../../../../../shared/components/ui/service-card/service-card.component";

@Component({
  selector: 'app-services',
  imports: [ServiceCArdComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {



  services: IService[] = [
  {
    icon: 'pi pi-desktop',
    title: 'Responsive Web Design',
    desc: 'Creating responsive and mobile-friendly layouts using HTML, CSS, Bootstrap, and Tailwind CSS for all screen sizes.',
  },
  {
    icon: 'pi pi-palette',
    title: 'UI/UX Frontend Development',
    desc: 'Developing clean, modern, and accessible interfaces using Angular, PrimeNG, and modern CSS frameworks.',
  },
  {
    icon: 'pi pi-mobile',
    title: 'Landing Page Design',
    desc: 'Designing effective and attractive landing pages optimized for speed, conversions, and brand consistency.',
  },
  {
    icon: 'pi pi-code',
    title: 'Clean Code Implementation',
    desc: 'Writing modular, clean, and maintainable frontend code with attention to performance and best practices.',
  },
  {
    icon: 'pi pi-globe',
    title: 'Single Page Applications',
    desc: 'Building dynamic, fast, and SEO-friendly SPAs using Angular, RxJS, and PrimeNG components.',
  },
  {
    icon: 'pi pi-server',
    title: 'API Integration',
    desc: 'Connecting frontend interfaces with RESTful APIs, handling data binding, and managing asynchronous operations.',
  },
];
}
