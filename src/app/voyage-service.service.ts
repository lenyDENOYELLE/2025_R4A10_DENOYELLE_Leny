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
  private voyages: Voyage[] = [
    ({ destination:'Montréal', description: 'Mon vrai', prix: 42, id: 'ertret' }),
    ({ destination:'Carcassonne', description: 'Le car qui sonne', prix: 55000, id: 'ttd5ss4a'})
  ];

  constructor(){}

  trouveTout(): Array<Voyage>{
    return this.voyages;
  }

  trouveAvecId(id: string): Voyage | null{
    let i: number = 0;
    while (i < this.voyages.length){
      if (this.voyages[i].id == id){
        return this.voyages[i];
      }
      i++;
    }
    return null;
  }
}
