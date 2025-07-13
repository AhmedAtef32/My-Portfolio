import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { KickStartComponent } from "../../../shared/components/ui/kick-start/kick-start.component";
import { HomeInfoComponent } from "../home/components/home-info/home-info.component";
import { ImageHomeComponent } from "../home/components/image-home/image-home.component";
import { AboutInfoComponent } from "./components/about-info/about-info.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { MySkilsComponent } from "../home/components/my-skils/my-skils.component";
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [KickStartComponent, HomeInfoComponent, ImageHomeComponent, AboutInfoComponent, ExperienceComponent, EducationComponent, MySkilsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
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
