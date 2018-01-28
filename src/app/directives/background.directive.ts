import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('class') color: string;

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
    this.color = 'white-color';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    this.color = '';
  }

}
