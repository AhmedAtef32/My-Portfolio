import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import {
  NgxThemeToggleComponent,
  OmDarkIcon,
  OmLightIcon,
  OmLabel,
} from '@omnedia/ngx-theme-toggle';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    DrawerModule,
    ButtonModule,
    NgxThemeToggleComponent,
    OmDarkIcon,
    OmLightIcon,
    OmLabel,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  visible2: boolean = false;
  isDarkMode: boolean = true;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      this.isDarkMode = storedTheme
        ? storedTheme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const root =
      typeof document !== 'undefined' ? document.documentElement : null;
    if (!root) {
      return;
    }

    if (this.isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }
}
