import { Component } from '@angular/core';
import { GridServicesComponent } from './grid-services/grid-services.component';

@Component({
  selector: 'app-nos-services',
  standalone: true,
  imports: [GridServicesComponent],
  templateUrl: './nos-services.component.html',
  styleUrl: './nos-services.component.sass'
})
export class NosServicesComponent {

}
