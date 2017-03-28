// ANGULAR DEPENDENCIEs IMPORTs
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// SERVICEs IMPORTs
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService: HeroesService, private router: Router ) {
  }

  ngOnInit() {
  }

  buscarHeroe( termino: string ) {

    this.router.navigate( ['/search', termino] );

  }

}
