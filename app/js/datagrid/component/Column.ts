import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Sorter} from './Sorter';

@Component({
	selector: 'column',
	template: `
		<div class="column" (click)="sortData(col.desc, colIndex)">
        	{{col.name}}
    		<sorter [direction] = "isReverse" *ngIf = "colIndex == activeColIndex"></sorter>
        </div>
	`,
	directives: [Sorter, NgClass],
	inputs: ['col', 'colIndex' ,'activeColIndex'],
	events: ['update']
})
export class Column {
	isReverse = true;
	
	@Input()
	private colIndex: number;
	
	@Input()
	private activeColIndex: number;
	
	@Output()
	private update = new EventEmitter();
	
	constructor() {}
	
	public sortData(key, index) {
		this.isReverse = !this.isReverse;
		this.update.next({ "key": key, "order": this.isReverse, "activeColIndex": index });
		
	}
}