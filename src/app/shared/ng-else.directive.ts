import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input()
  set ngElse(condition:boolean){
    if(!condition){
      this.vF.createEmbeddedView(this.tF);
    }else{
      this.vF.clear();
    }
  }
  constructor(
    private tF : TemplateRef<any>,
    private vF : ViewContainerRef
  ) { }
  

}
