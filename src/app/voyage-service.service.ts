import { Injectable } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from './data';

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

  deleteAvecId(id: string): boolean{
    let i: number = this.voyages.findIndex((voyage) => voyage.id == id);
    if (i != -1){
      this.voyages.splice(i, 1);
      return true;
    }
    return false;
  }

  genereVoyageAleatoire(): Voyage{
    let id_dest: number = Math.floor(Math.random() * DESTINATIONS.length);
    let id_desc: number = Math.floor(Math.random() * DESCRIPTIONS.length);
    let id_prix: number = Math.floor(Math.random() * PRIX.length);
    let id_voyage: string = Math.random().toString().replaceAll('.', '');
    let voyagegenere: Voyage = {
      destination: DESTINATIONS[id_dest],
      description: DESCRIPTIONS[id_desc],
      prix: PRIX[id_prix],
      id: id_voyage,
    }
    return voyagegenere;
  }
}
