import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnInit {
  @Input()
  appFontSize!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.appFontSize || '20px');
  }
}
