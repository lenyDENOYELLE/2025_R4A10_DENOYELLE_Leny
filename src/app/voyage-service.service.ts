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
    ({ destination:'dumb', description: 'dumbitch', prix: 12, id: 'ertret' }),
    ({ destination:'crumb', description: 'croute de pain', prix: 12, id: 'ttd5ss4a'})
  ];

  constructor(){}

  trouveTout(){
    return this.voyages;
  }
}
