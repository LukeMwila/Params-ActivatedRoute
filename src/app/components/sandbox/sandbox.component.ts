import { Component } from '@angular/core' 

@Component({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
        <!-- 3 ways to bind properties -->
        <div><img src="{{ imageUrl }}"></div>
        <div><img [src]="imageUrl"></div>
        <div><img bind-src="imageUrl"></div>
    `
})

export class SandboxComponent{
    imageUrl = 'http://lorempixel.com/400/200'
}

