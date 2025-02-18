import { Injectable } from '@angular/core';

export type Voyage = {
    destination: string;
    description: string;
    prix: number;
    id: string;
  }
@Injectable({
  providedIn: 'root'
}) 


export class VoyageServiceService {
  private voyages: Voyage[] = [];

  constructor(){}

  trouveTout(){
    return this.voyages;
  }
}
