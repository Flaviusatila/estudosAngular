import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-recebe-curso',
  templateUrl: './recebe-curso.component.html',
  styleUrls: ['./recebe-curso.component.css']
})
export class RecebeCursoComponent implements OnInit {

  curso: string;

  constructor(private cS : CursosService) { }

  ngOnInit(): void {
    this.cS.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
