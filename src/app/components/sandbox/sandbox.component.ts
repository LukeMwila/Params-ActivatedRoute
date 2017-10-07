import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let d of data">{{ d }}</li>
        </ul>
    `
})

export class SandboxComponent{
    data:any[] = [];

    constructor(public dataService:DataService){
        this.dataService.getData().subscribe(data => {
            //console.log(data);
            this.data.push(data);
        });
    }
}

