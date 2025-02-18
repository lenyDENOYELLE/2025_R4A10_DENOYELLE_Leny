import { Component, OnInit } from '@angular/core';
import { Voyage, VoyageServiceService } from '../voyage-service.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit{
  listevoyages!: Voyage[];
  constructor(
    private readonly voyageurService: VoyageServiceService,
  ){}

  ngOnInit(){
      this.listevoyages = this.voyageurService.trouveTout();
  }
}
