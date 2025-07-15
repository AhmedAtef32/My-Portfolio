import { Component, input, InputSignal } from '@angular/core';
import { IService } from '../../../interfaces/IService';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCArdComponent {

    service:InputSignal<IService> = input.required()
    index:InputSignal<number> = input.required()
}
