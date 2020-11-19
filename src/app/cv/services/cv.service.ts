import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  personnes = [
    new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
    new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
    new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '                 ', 123456, 38),
  ];

  constructor() { }
}
