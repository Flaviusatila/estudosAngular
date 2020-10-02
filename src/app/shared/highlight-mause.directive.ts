import { Directive, HostListener,ElementRef, Renderer2,HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMause]'
})
export class HighlightMauseDirective {

  @HostListener('mouseenter')
  onMauseOver(){
    // this.rR.setStyle(this.eF.nativeElement,'background-color','yellow');
    this.backgroudColor = 'yellow'
  }

  @HostListener('mouseleave')
  onMauseLeave(){
    // this.rR.setStyle(this.eF.nativeElement,'background-color','white');
    this.backgroudColor = 'white'

  }

  @HostBinding('style.backgroundColor') backgroudColor : string;

  constructor(
    // private eF: ElementRef ,    private rR : Renderer2
    ) { }

}
