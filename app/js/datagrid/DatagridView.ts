import {Component} from 'angular2/core';
import {Datagrid} from './component/Datagrid';

interface User {
	id: number;
	name: string;
	work: string;
	email: string;
	dob: string;
	address: string;
	city: string;
	optedin: boolean;
}
@Component({
	selector: 'datagrid-view',
	templateUrl: 'js/datagrid/datagrid_view.html',
	directives: [Datagrid],
})
class DatagridView {
	columns = [
		{ name: "Name", desc: "name" },
		{ name: "Email", desc: "email" },
		{ name: "Work", desc: "work" },
		{ name: "DBO", desc: "dob" },
	]
	public users: User[] = [
		{
			"id": 0,
			"name": "Adam Carter",
			"work": "Unilogic",
			"email": "bdam.carter@unilogic.com",
			"dob": "24/11/1978",
			"address": "83 Warner Street",
			"city": "Boston",
			"optedin": true
		},
		{
			"id": 1,
			"name": "Leanne Brier",
			"work": "Connic",
			"email": "beanne.brier@connic.org",
			"dob": "13/05/1987",
			"address": "9 Coleman Avenue",
			"city": "Toronto",
			"optedin": false
		},
		{
			"id": 2,
			"name": "Adam Carter",
			"work": "Unilogic",
			"email": "ddam.carter@unilogic.com",
			"dob": "24/11/1978",
			"address": "83 Warner Street",
			"city": "Boston",
			"optedin": true
		},
		{
			"id": 3,
			"name": "Leanne Brier",
			"work": "Connic",
			"email": "eeanne.brier@connic.org",
			"dob": "13/05/1987",
			"address": "9 Coleman Avenue",
			"city": "Toronto",
			"optedin": false
		},
		{
			"id": 4,
			"name": "Adam Carter",
			"work": "Unilogic",
			"email": "fdam.carter@unilogic.com",
			"dob": "24/11/1978",
			"address": "83 Warner Street",
			"city": "Boston",
			"optedin": true
		},
		{
			"id": 5,
			"name": "Leanne Brier",
			"work": "Connic",
			"email": "geanne.brier@connic.org",
			"dob": "13/05/1987",
			"address": "9 Coleman Avenue",
			"city": "Toronto",
			"optedin": false
		},
		{
			"id": 6,
			"name": "Adam Carter",
			"work": "Unilogic",
			"email": "hdam.carter@unilogic.com",
			"dob": "24/11/1978",
			"address": "83 Warner Street",
			"city": "Boston",
			"optedin": true
		},
		{
			"id": 7,
			"name": "Leanne Brier",
			"work": "Connic",
			"email": "leanne.brier@connic.org",
			"dob": "13/05/1987",
			"address": "9 Coleman Avenue",
			"city": "Toronto",
			"optedin": false
		}
		
	];
}	


export default DatagridView;