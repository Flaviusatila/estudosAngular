import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')
  onMauseOver(){
    // this.rR.setStyle(this.eF.nativeElement,'background-color','yellow');
    this.backgroudColor = this.highligthColor;
  }

  @HostListener('mouseleave')
  onMauseLeave(){
    // this.rR.setStyle(this.eF.nativeElement,'background-color','white');
    this.backgroudColor = this.defaultColor;

  }

  @HostBinding('style.backgroundColor') backgroudColor : string;

  @Input() 
  defaultColor   = 'white';

  @Input() 
  highligthColor = 'yellow';

  constructor() { }

  ngOnInit(): void {
    this.backgroudColor = this.defaultColor;
  }

}
