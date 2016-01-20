import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, Router, Location, LocationStrategy, HashLocationStrategy, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import AccordionView from './accordion/AccordionView';
import DatagridView from './datagrid/DatagridView';



@Component({
    selector: 'demo-app',
    template: `
    	<h1>NG2 - Component Demo</h1>
    	<ul class="nav nav-pills">
	      <li [class.active]="getLinkStyle('#/accordion')"><a [routerLink]="['Accordion']">Accordion</a></li>
	      <li [class.active]="getLinkStyle('#/datagrid')"><a [routerLink]="['DataGrid']">DataGrid</a></li>
	    </ul>
	    
    	<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', redirectTo: ['/accordion'] },
	{ path: '/accordion', name: 'Accordion', component: AccordionView },
	{ path: '/datagrid', name: 'DataGrid', component: DatagridView }

])
class AppDemo {
	router: Router;
    location: Location;
    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

	getLinkStyle(path) {
		return (this.location.path() === path.substring(1, path.length));
    }
}

bootstrap(AppDemo, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
]);