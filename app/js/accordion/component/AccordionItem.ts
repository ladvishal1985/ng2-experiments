import {Component, View} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
	selector:'accordion-item',
	template:`
		<div class="panel panel-default">
    		<div  class="panel-heading" (click) = "toggleOpen($event)">
      			<h4 class="panel-title">
        			<a class="accordion-toggle" >{{data.heading}}</a>
        			<i class="indicator glyphicon glyphicon-chevron-right pull-right" [class.glyphicon-chevron-down]="isOpen"></i>
      			</h4>
    	</div>
    	<div id="collapseOne" class="panel-collapse" [hidden] = "!isOpen" >
      		<div class="panel-body">{{data.body}}</div>
    	</div> 
  	`,
	inputs: ['data', 'isOpen'],
	directives: [NgClass]
})
export class AccordionItem {
	private _isOpen: boolean = false;

	toggleOpen(event) {
		event.preventDefault();
		console.log("Is Clicked!!");
		this.isOpen = !this.isOpen;
	}
	public get isOpen(): boolean {
		return this._isOpen;
	}

	public set isOpen(value: boolean) {
		this._isOpen = value;
	}
}