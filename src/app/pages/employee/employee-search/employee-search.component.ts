import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'New', icon: 'pi pi-fw pi-plus'},
            {label: 'Open', icon: 'pi pi-fw pi-download'},
            {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
        ];
    }

}
