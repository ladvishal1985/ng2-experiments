import {Component, Pipe} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
	selector: 'sorter',
	template: `
		<i class="indicator glyphicon glyphicon glyphicon-sort-by-alphabet"  [ngClass]="{'glyphicon-sort-by-alphabet-alt': direction == false}"></i>
	`,
	directives: [NgClass],
	inputs: ['direction']
})
export class Sorter {
	constructor() {} 
}

@Pipe({ name: 'orderBy' })
export class OrderByPipe {
    direction: number;
    isReverse: any;
    constructor() {
        this.direction = 1;
    }
    transform<T>(input: T[], args: string[]): T[] {

        console.log("Actual Direction-->" + args[1]);
        this.isReverse = args[1];
        if(this.isReverse == true) {
            this.direction = 1; 
            console.log("It is ascending!");
        }
        else {
            this.direction = -1;
            console.log("It is descending!"); 
        }
        
		if (input) {
            let property = args[0];
            return input.slice().sort((a, b) => {
                if (a[property] < b[property]) {
                    return -1 * this.direction;
                } else if (b[property] < a[property]) {
                    return 1 * this.direction;
                } else {
                    return 0;
                }
            });
        } else {
            return input;
        }
    }
}