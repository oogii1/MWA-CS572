import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[myvisibility]',
  inputs: ['myvisibility']
})
export class MyvisibilityDirective {
  myvisibility: boolean = true;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, "visibility", this.myvisibility ? "visible" : "hidden");
  }

}
