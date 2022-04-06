import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event): void {
    console.log('mouseenter event on host element', event);
    // use native element
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: HTMLElement): void {
    console.log('mouseleave event on host element');
    // use target
    target.style.backgroundColor = 'white';
  }

}
