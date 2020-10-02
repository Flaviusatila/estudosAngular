import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

 livro: any ={
   titulo: 'Learning JavaScript Data Structures and Algorithms 2nd',
   rating: 4.54321,
   numeroPaginas: 314,
   preco: 44.99,
   dataLancamento: new Date(2016,5,23),
   url: 'http://a.co/glqjpRP'
 };

 livros: string[] = ['Java', 'Angular 2']
 filtro : string;

 obterCursos(){
  if(this.livros.length ===0   || 
     this.livros === undefined){
    return this.livros;
  }
    return this.livros.filter((v)=>{
      if( v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
        return true;
      }
      return false;
    });
 }

  constructor() { }

  ngOnInit(): void {
  }

}
