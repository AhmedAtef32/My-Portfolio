import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ContactIconsComponent } from "./components/contact-icons/contact-icons.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [ContactIconsComponent, ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {
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
