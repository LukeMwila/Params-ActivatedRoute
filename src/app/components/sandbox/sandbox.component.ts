import { Component } from '@angular/core' 

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello {{ text }}</h1>
        <div>
            <input type="text" (keyup)="fireEvent($event)" placeholder="keyup event">
        </div>
        <div>
            <input type="text" (focus)="fireEvent($event)" placeholder="focus">
        </div>
        <div>
            <input type="text" (blur)="fireEvent($event)" placeholder="blur">
        </div>
        <div>
            <input type="text" (copy)="fireEvent($event)" placeholder="copy">
        </div>
        <div>
            <input type="text" (paste)="fireEvent($event)" placeholder="paste">
        </div>
    `
})

export class SandboxComponent{
    text:string = '';

    fireEvent(e){
        console.log(e.type);
        this.text = e.target.value;
    }
}

