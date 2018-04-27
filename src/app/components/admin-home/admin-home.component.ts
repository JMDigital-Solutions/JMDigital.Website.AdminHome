import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-admin-home',
	templateUrl: 'admin-home.component.html',
	styleUrls: ['admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

	public navItems: NavItemModel[] = [];

	constructor() { }

	ngOnInit() {
		this.navItems = [
			{ Link: 'mail', Label: 'Bandeja de Entrada' }
		];
	}

}
