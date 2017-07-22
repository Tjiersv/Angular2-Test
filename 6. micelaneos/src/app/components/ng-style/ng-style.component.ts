import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size' : tamano + 'px ' }">
      Hola mundo, en ngStyle
    </p>
    <br>
    <p [style.fontSize]="'40px'">
      Hola mundo, en style.fontSize
    </p>
    <br>
    <p [style.fontSize.px]="'tamano'">
      Hola mundo, en style.fontSize.px
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 20;

  constructor() { }

  ngOnInit() {
  }

}
