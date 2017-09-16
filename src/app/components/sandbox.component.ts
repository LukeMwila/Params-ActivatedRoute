import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent{
    name:string = 'John Doe';
    age:number = 35;
    hasChildren:boolean = true;
    city:any = 'Lusaka';
    myNumbersArray:number[] = [11,12,13];
    nyStringArray:string[] = ['Hey,','how','are','you','?'];
    myAnyArray:any[] = [11,28,'Jazz Jack Rabbit'];
    myTuple: [string, number] = ['James Harden', 32];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null;

    constructor(){
        
    }
}