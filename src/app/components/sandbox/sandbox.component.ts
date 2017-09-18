import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
    <h1>Hello 
       <!--
       <span *ngIf="showName">{{name}}</span>
       <span *ngIf="!showName">World</span> 
       -->
       <span *ngIf="showName; else noName">{{ name }}</span>
       <ng-template #noName>World</ng-template>
    </h1>
    <p>Hello {{ showName ? name : 'World' }}</p>

    <hr>

    <div [ngSwitch]="greeting">
        <div *ngSwitchCase="'1'">Hello World</div>
        <div *ngSwitchCase="'2'">Hi You</div>
        <div *ngSwitchCase="'3'">Hey Me</div>
        <div *ngSwitchDefault>Sup</div>
    </div>
    `
})

export class SandboxComponent{
    name:string = 'John Doe';
    showName:boolean = false;
    greeting:number = 2;
}

