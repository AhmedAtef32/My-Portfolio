import { Component, input, InputSignal } from '@angular/core';
import { IProject } from '../../../interfaces/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  project:InputSignal<IProject> = input.required()

}
