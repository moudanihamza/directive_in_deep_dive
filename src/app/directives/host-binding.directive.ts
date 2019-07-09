import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective implements OnInit {

  @Input() defaultColor: string;
  @Input('appHostBinding') hightLightColor: string;

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.hightLightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventDate: Event) {
    this.backgroundColor = this.defaultColor;
  }
  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
