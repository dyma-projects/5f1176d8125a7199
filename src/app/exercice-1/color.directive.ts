import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  private defaultKey = 'defaultKey';
  private config: Map<string, string> = new Map([
            ['ArrowUp',     'green'],
            ['ArrowDown',   'orange'],
            ['ArrowLeft',   'blue'],
            ['ArrowRight',  'red'],
            ['defaultKey',  'black']
            ]);

  @HostListener('window:keydown', ['$event']) windowKeyDown($event) {

    this.onKeyDown($event.key);
  }

  constructor(private el: ElementRef)  { }

  onKeyDown( key: string): void {

    if ( this.config.has(key) ) {
      this.updateColor(this.config.get(key));
    } else {
      this.updateColor(this.config.get(this.defaultKey));
    }

  }

  updateColor(color: string): void {
      this.el.nativeElement.style.color = color;
   }

  }
