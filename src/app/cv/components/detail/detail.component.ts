import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../model/personne';
import { EmbaucheService } from '../../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private cvEmbaucheService: EmbaucheService
  ) {}
  
  embaucheCv(cvEmbauche:Personne){
    this.cvEmbaucheService.addEmbauche(cvEmbauche);
  }

  ngOnInit(): void {}
}
