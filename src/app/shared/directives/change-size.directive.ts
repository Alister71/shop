import {   Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appChangeWidth]'
})
export class ChangeSizeDirective {
  @Input('appChangeWidth') width!: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.changeWidth(this.width);
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.changeWidth('1px dotted green');
  }
  private changeWidth(width: string): void {
    this.render.setStyle(this.el.nativeElement, 'border', width);
  }

}
