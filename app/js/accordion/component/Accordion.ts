import {Component, View} from 'angular2/core';
import {AccordionItem} from './AccordionItem';


@Component({
	selector:'accordion-panel',
	templateUrl: 'js/accordion/component/accordion_tpl.html',
	inputs:['items'],
	directives: [AccordionItem]
})
export class Accordion {
	
}