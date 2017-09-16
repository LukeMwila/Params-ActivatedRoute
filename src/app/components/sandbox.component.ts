import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent{

    customer:Customer;
    customers:Customer[];

    constructor(){
        this.customer = {
            id: 1,
            name: 'Carlisle Malone',
            email: 'carl.mal@mail.com'
        }

        this.customers = [
            {
                id: 2,
                name: 'Jessie Malone',
                email: 'jessie.mal@mail.com'
            },
            {
                id: 3,
                name: 'Francis Lubinda',
                email: 'franco.lubinda@mail.com'
            }
        ];
    }

}

