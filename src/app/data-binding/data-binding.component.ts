import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url = 'https//google.com';
  cursoAngular = false;
  urlImg = 'https://lorempixel.com/400/200/sports/';
  valorAtual;
  valorSalvo;
  isMouseOver = false;
  nome:string = 'abc';

  nomeDoCurso = 'Angular';

  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado(){
     alert('Botao clicado!');
  }

  onKeyUp(evento){
    this.valorAtual = <HTMLInputElement>evento.target.value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMauseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

}
