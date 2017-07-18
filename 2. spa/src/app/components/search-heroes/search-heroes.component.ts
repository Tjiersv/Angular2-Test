// ANGULAR DEPENDENCIEs IMPORTs
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// SERVICEs IMPORTs
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.css']
})
export class SearchHeroesComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private acitvatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {

    this.acitvatedRoute.params.subscribe(params => {
      this.termino = params['data'];
      this.heroes = this._heroesService.buscarHeroes(params['data']);
      console.log(this.heroes);
    });

  }

}
