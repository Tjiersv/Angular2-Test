import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective {

  @Input() appResaltado: string;

  constructor( private elementRef: ElementRef ) {
    console.log('Directiva llamada');
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar( this.appResaltado || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( null );
  }

  private resaltar( color: string ) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
