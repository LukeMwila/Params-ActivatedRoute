import { Component } from '@angular/core' 

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.name"
                    name="name"
                    #userName="ngModel"
                    minlength="2"
                    required
                >
                <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">Name is required</div>
                <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">Name should be at least 2 characters long</div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.email"
                    name="email"
                    #userEmail="ngModel"
                    required
                >
                <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger">Email is required</div>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input 
                    type="text" 
                    class="form-control"
                    [(ngModel)]="user.phone"
                    name="phone"
                    #userPhone="ngModel"
                    minlength="10"
                >
                <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">Enter a valid phone number</div>
            </div>
            <input type="submit" class="btn btn-success" value="Submit">
        </form>
    `
})

export class SandboxComponent{
    user = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit({value, valid}){
        if(valid){
            console.log(value)
        }else{
            console.log('Form is invalid')
        }
    }
}

