import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();


    private cursos: string[] = ['Angular','Java','Springboot'];

    constructor(private lS: LogService){
        console.log('***Cursos Service***');
    }

    getCursos(){
        return this.cursos;
    }
    addCurso(curso:string){
        this.lS.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }

    // removeCurso(curso:string){
    //     this.cursos.reverse
    // }
}