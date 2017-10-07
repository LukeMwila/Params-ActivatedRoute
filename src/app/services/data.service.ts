import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    data: Observable<Array<number>>;

    constructor(){

    }

    getData(){
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 1000);

            setTimeout(() => {
                observer.next(2);
            }, 2000);

            setTimeout(() => {
                observer.next(3);
            }, 3000);

            setTimeout(() => {
                observer.next('Hello');
            }, 4000);

            setTimeout(() => {
                observer.complete();
            }, 5000);
        });

        return this.data;
    }

}
