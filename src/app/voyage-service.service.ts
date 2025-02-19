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

  trouveTout(){
    return this.voyages;
  }
}
