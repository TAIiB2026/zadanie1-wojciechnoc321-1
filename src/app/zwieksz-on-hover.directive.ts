import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZwiekszOnHover]',
  standalone: false
})
export class ZwiekszOnHoverDirective {
  @HostBinding('style.transform')
  transform = 'scale(1)';

  @HostBinding('style.transition')
  transition = 'transform 0.2s';

  @HostBinding('style.display')
  display = 'inline-block';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.transform = 'scale(2)';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.transform = 'scale(1)';
  }
}