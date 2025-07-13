import { Component } from '@angular/core';
import { ContactIconsComponent } from "./components/contact-icons/contact-icons.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact-me',
  imports: [ContactIconsComponent, ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

}
