// ANGULAR DEPENDENCIEs IMPORTs
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// SERVICEs IMPORTs
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private acitvatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this.acitvatedRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.heroe = _heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });

  }

  ngOnInit() {
  }

}
