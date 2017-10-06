import { Component } from '@angular/core' 

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <button id="btn" (click)="fireEvent($event)">Click Event</button>
        <br>
        <button id="btn2" (mouseover)="fireEvent($event)">Mouse Over</button>
        <br>
        <button id="btn3" (mousedown)="fireEvent($event)">Mouse Down</button>
        <br>
        <button id="btn4" (mouseup)="fireEvent($event)">Mouseup Event</button>
        <br>
        <button id="btn5" (dblclick)="fireEvent($event)">Double Click Event</button>
        <br>
        <button id="btn6" (drag)="fireEvent($event)">Drag Event</button>
        <br>
        <button id="btn7" (dragover)="fireEvent($event)">Drag Over Event</button>
    `
})

export class SandboxComponent{
    fireEvent(e){
        console.log(e.type);
    }
}

