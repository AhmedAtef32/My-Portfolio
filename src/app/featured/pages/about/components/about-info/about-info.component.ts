import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about-info',
  imports: [],
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.css'
})
export class AboutInfoComponent implements OnInit {
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
