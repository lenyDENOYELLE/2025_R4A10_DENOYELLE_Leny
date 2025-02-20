import { Component, Input } from '@angular/core';
import { VoyageServiceService } from '../voyage-service.service';

@Component({
  selector: 'app-bouton-suppression',
  standalone: true,
  imports: [],
  templateUrl: './bouton-suppression.component.html',
  styleUrl: './bouton-suppression.component.sass'
})
export class BoutonSuppressionComponent {
  @Input({required: true}) id!: string;
  constructor(
    private readonly service: VoyageServiceService,
  ){}

  onClick(){
    this.service.deleteAvecId(this.id);
  }
}
