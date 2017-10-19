import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent  } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
