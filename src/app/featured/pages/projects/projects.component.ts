import { Component } from '@angular/core';
import { KickStartComponent } from "../../../shared/components/ui/kick-start/kick-start.component";
import { WorksAndProjectsComponent } from "../../../shared/components/ui/works-and-projects/works-and-projects.component";

@Component({
  selector: 'app-projects',
  imports: [KickStartComponent, WorksAndProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
