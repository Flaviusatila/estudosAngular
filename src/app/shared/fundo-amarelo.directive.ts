import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p,button[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private eF: ElementRef, private r2:Renderer2) {
    // console.log(this.eF);
    // this.eF.nativeElement.style.backgroundColor = 'yellow';
    this.r2.setStyle(this.eF.nativeElement,'background-color','yellow'
    );
   }
}
