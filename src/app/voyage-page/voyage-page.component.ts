import { Component, OnInit } from '@angular/core';
import { Voyage, VoyageServiceService } from '../voyage-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voyage-page',
  standalone: true,
  imports: [],
  templateUrl: './voyage-page.component.html',
  styleUrl: './voyage-page.component.sass'
})
export class VoyagePageComponent implements OnInit{
  voyage: Voyage | null = null;
  id!: string;
  constructor(
    private readonly voyageurService: VoyageServiceService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.voyage = this.voyageurService.trouveAvecId(this.id);
    if (!this.voyage){
      this.router.navigate(['/404'])
    }
  }
  
}
