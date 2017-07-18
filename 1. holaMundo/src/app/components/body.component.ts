import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent  {

  mostrar: boolean = true;
  text: string = 'Un gran poder, requiere una gran responsabilida!!!';
  author: string = 'Ben Parker';

  personajes: string[] = ['Spiderman', 'Venom', 'Duende Verde', 'Dr. Octopus'];

}
