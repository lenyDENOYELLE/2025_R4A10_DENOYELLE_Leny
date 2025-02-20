import { Component, Input } from '@angular/core';
import { Voyage } from '../voyage-service.service'
import { RouterLink , RouterLinkActive} from '@angular/router';
import { BoutonSuppressionComponent } from '../bouton-suppression/bouton-suppression.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    BoutonSuppressionComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input({required: true, alias: 'voyage'}) marshall!: Voyage;
}
