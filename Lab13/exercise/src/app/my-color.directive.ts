import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]',
  inputs: ['myColor']
})
export class MyColorDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @HostListener('click')
  bla(): void {
    const index = Math.floor(Math.random() * 3);
    console.log(index);
    const arr = ['red', 'green', 'blue'];
    this.renderer.setStyle(this.element.nativeElement, 'color', arr[index]);
  }

}
