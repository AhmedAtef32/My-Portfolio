import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MySkilsComponent } from './components/my-skils/my-skils.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { WorksAndProjectsComponent } from '../../../shared/components/ui/works-and-projects/works-and-projects.component';
import { KickStartComponent } from '../../../shared/components/ui/kick-start/kick-start.component';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { ServicesComponent } from "./components/services/services.component";

@Component({
  selector: 'app-home',
  imports: [
    MySkilsComponent,
    ImageHomeComponent,
    HomeInfoComponent,
    WorksAndProjectsComponent,
    KickStartComponent,
    ServicesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _PLATFORM_ID = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }
}
