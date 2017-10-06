import { Component } from '@angular/core' 

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="name" name="name" class="form-control">
                </div>
                <input type="submit" value="Submit" class="btn btn-success">
            </form>
            <hr>
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let user of users">
                    {{ user }}
                </li>
            </ul>
        </div>
    `
})

export class SandboxComponent{
    name:string = '';
    users:string[] = ['Mary Swanson', 'Joseph Hove'];

    onSubmit(){
        this.users.push(this.name);
        this.name = '';
    }
}

