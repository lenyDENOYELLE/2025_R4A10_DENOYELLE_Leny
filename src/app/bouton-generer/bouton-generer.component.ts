import { Component, Output, EventEmitter, } from '@angular/core';
import { VoyageServiceService, Voyage } from '../voyage-service.service';


@Component({
  selector: 'app-bouton-generer',
  standalone: true,
  imports: [],
  templateUrl: './bouton-generer.component.html',
  styleUrl: './bouton-generer.component.sass'
})
export class BoutonGenererComponent {
  @Output() voyage_genere = new EventEmitter<Voyage>();
  constructor(
    private readonly service: VoyageServiceService,
  ){}



  onClick(){
    let generation: Voyage = this.service.genereVoyageAleatoire();
    this.voyage_genere.emit(generation);
  }
}
