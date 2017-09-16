import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>{{ name }} is {{ age }} years old.</h1>
        <h2>His name is {{ person.firstName }} {{ person.lastName }}</h2>
        <ul>
            <li>{{ showAge() }}</li>
        </ul>
    `
})

export class SandboxComponent{
    name;
    age;
    person = {firstName: 'Kawhi', lastName: 'Leonard'}

    constructor(){
        this.name = 'Steph Curry';
        this.age = 28;
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}