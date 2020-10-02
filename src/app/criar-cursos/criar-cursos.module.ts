import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursosComponent } from './criar-cursos.component';
import { RecebeCursoComponent } from '../recebe-curso/recebe-curso.component';

@NgModule({
  declarations: [
    CriarCursosComponent,
    RecebeCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursosComponent]//,
  //providers: [CursosService]
})
export class CriarCursoModule { }