import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <!-- NgStyles -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">NgStyle</h2>
    </div>
    <div class="card-block">
      <app-ng-style></app-ng-style>
    </div>
  </div>
  <br>

  <!-- Css -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Css</h2>
    </div>
    <div class="card-block">
      <p>
        hola Mundo, desde app.component
      </p>
      <app-css></app-css>
    </div>
  </div>
  <br>

  <!-- NgClass -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">NgClass</h2>
    </div>
    <div class="card-block">
      <app-clases></app-clases>
    </div>
  </div>
  <br>

  <!-- Directivas Personalizadas -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Directivas Personalizadas</h2>
    </div>
    <div class="card-block">
      <p [appResaltado]="'orange'">
        Hola Directivas!!!
      </p>
    </div>
  </div>
  <br>

  <!-- Ng Switch  -->
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">Ng Switch</h2>
    </div>
    <div class="card-block">
      <app-ng-switch></app-ng-switch>
    </div>
  </div>
  <br>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
