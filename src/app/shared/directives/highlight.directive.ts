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
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: HTMLElement): void {
    target.style.backgroundColor = 'white';
  }

}
