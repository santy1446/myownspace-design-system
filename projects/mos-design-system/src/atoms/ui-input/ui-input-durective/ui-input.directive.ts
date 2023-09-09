import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mosUiInput]'
})
export class UiInputDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'mos-input');
  }

}
