import {Component, View} from 'angular2/core';
import {Sorter, OrderByPipe} from './Sorter';
import {Column} from './Column'

@Component({
	selector:"datagrid",
	templateUrl: 'js/datagrid/component/dg_tpl.html',
	inputs: ["dsource", 'columnDefs'],
	directives: [Column],
	pipes: [OrderByPipe]
})
export class Datagrid {
	orderProp: string;
	reverse: boolean;
	activeColIndex: number;
	constructor(){}
	
	onOrderChange(value) {
		this.orderProp = value.key;
		this.reverse = value.order;
		this.activeColIndex = value.activeColIndex;
	}
}