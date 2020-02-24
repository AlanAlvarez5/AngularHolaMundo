import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'Winter is coming',
        autor: 'Eddard Stark'
    };

    personajes: string[] = ['Jon', 'Ned', 'Rob'];
}