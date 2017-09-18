import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        {{ people }}
        <ul>
            <li *ngFor="let person of people">
                {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people; let i = index">
                {{ i + 1 }} {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people2">
                {{person.firstName}} {{person.lastName}}
            </li>
        </ul>
    `
})

export class SandboxComponent{
    people = ['Rick', 'Darrell', 'Carl', 'Glen'];
    people2 = [
        {
            firstName: 'Rick',
            lastName: 'Mwila'
        },
        {
            firstName: 'Jerry',
            lastName: 'Johnson'
        },
        {
            firstName: 'Xoliswe',
            lastName: 'Zulu'
        },
        {
            firstName: 'Chanda',
            lastName: 'Mwila'
        }
    ];

    constructor(){
        this.people[2] = 'Xavier';
    }
}

