import { Component } from '@angular/core';
import { MySkilsComponent } from "./components/my-skils/my-skils.component";
import { ImageHomeComponent } from "./components/image-home/image-home.component";
import { HomeInfoComponent } from "./components/home-info/home-info.component";
import { WorksAndProjectsComponent } from "../../../shared/components/ui/works-and-projects/works-and-projects.component";
import { KickStartComponent } from "../../../shared/components/ui/kick-start/kick-start.component";

@Component({
  selector: 'app-home',
  imports: [MySkilsComponent, ImageHomeComponent, HomeInfoComponent, WorksAndProjectsComponent, KickStartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
