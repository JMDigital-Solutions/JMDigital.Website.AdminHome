import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatCheckboxChange } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MailService } from '../../services/mail.service';

@Component({
	moduleId: module.id,
	selector: 'app-inbox',
	templateUrl: 'inbox.component.html',
	styleUrls: ['inbox.component.scss']
})
export class InboxComponent implements OnInit, AfterViewInit {

	displayedColumns = ['senderEmail', 'Subject', 'Date', 'icons'];
	dataSource = new MatTableDataSource<InboxModel>();
	selection = new SelectionModel<InboxModel>(true, []);
	isLoadingResults = true;
	resultsLength = 0;
	selectedRows: Array<InboxModel> = new Array<InboxModel>();

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private _mailService: MailService) { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;

		this._mailService.getMails()
			.subscribe(
				(data) => {
					this.dataSource.data = data;
					this.isLoadingResults = false;
					console.log(this.dataSource.data);
				},
				(error) => {
					this.isLoadingResults = false;
					console.log(error);
				}
			);
	}

	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	masterToggle($event: MatCheckboxChange) {
		if (this.isAllSelected()) {
			this.selection.clear();
			this.selectedRows = new Array<InboxModel>();
		} else
			this.dataSource.data.forEach(row => {
				console.log($event);
				this.selection.select(row);

					this.selectedRows.push(row);
			});
	}

	selectRow($event: MatCheckboxChange, row: InboxModel) {
		if ($event.checked)
			this.selectedRows.push(row);
		else
			this.selectedRows.splice(this.selectedRows.indexOf(row), 1);

		return this.selection.toggle(row);
	}

	isRowSelected(row: InboxModel): boolean {
		return this.selectedRows.find((value) => value === row) ? true : false;
	}

	readMail(row: InboxModel) {
		console.log(row);
	}

}
