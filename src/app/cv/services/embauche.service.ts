import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  personnesEmbauches: Personne[] = [];

  addEmbauche(cv:Personne){
    if(!(this.personnesEmbauches.indexOf(cv) >=0)){
      this.personnesEmbauches.push(cv);
    }
    
  }


  constructor() { }
}
