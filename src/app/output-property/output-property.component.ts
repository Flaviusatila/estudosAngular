import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  valor = 0;

  @Output()
  mudouValor = new EventEmitter();

  constructor() { }

  incrementaValor(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  
  decrementaValor(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }



  ngOnInit(): void {
  }

}
