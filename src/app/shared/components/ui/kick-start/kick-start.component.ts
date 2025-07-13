import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-kick-start',
  imports: [RouterLink],
  templateUrl: './kick-start.component.html',
  styleUrl: './kick-start.component.css',
})
export class KickStartComponent implements OnInit {
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
