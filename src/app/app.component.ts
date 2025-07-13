import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layouts/navbar/navbar.component";
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent,AnimateOnScroll],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
}
