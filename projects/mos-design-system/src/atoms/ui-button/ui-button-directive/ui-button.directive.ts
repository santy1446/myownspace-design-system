import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[mosUiButton]'
})
export class UiButtonDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'mos-button');
  }

}
