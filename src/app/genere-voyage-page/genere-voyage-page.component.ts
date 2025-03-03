import { Component } from '@angular/core';
import { BoutonGenererComponent } from '../bouton-generer/bouton-generer.component';

@Component({
  selector: 'app-genere-voyage-page',
  standalone: true,
  imports: [BoutonGenererComponent,],
  templateUrl: './genere-voyage-page.component.html',
  styleUrl: './genere-voyage-page.component.sass'
})
export class GenereVoyagePageComponent {

}
