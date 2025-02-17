import { Component } from '@angular/core';
import { CardServiceComponent } from './card-service/card-service.component';

@Component({
  selector: 'app-grid-services',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './grid-services.component.html',
  styleUrl: './grid-services.component.sass'
})

export class GridServicesComponent {

}
