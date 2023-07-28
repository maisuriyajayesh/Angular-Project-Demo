import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-form-deatils-list',
  templateUrl: './form-deatils-list.component.html',
  styleUrls: ['./form-deatils-list.component.scss']
})
export class FormDeatilsListComponent implements OnInit {
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    suppressMovable: true
    //resizable: true
  };
  
  public rowHeight = 45;
  public headerHeight = 45;
  
  constructor(
    private router: Router
  ) {
    this.contactFormArr = [
    ];
    this.columnDefs = [
      { headerName: '#', field: 'index', valueGetter: 'node.rowIndex + 1', width: 60, suppressSizeToFit: true },
      { headerName: 'Name', field: 'Name', flex: 1, },
      { headerName: 'Email', field: 'Email', flex: 1, suppressSizeToFit: true },
      { headerName: 'Mobile', field: 'Mobile', width: 160, suppressSizeToFit: true },
      {
        headerName: 'Action', width: 120, suppressSizeToFit: true,
        cellRenderer: (params: any) => {
          return `
          <div>
          <button class="btn btn-sm btn-primary m-0 bi bi-pencil-fill" data-action-type="editFormData"></button>
            <button class="btn btn-sm btn-danger m-0 bi bi-trash3-fill" data-action-type="removeFormData"></button>
          </div>  
          `;
        },
      }
    ];

  }
  rowData: any[] = [];
  columnDefs: any[];
  selectedData: any;
  contactFormArr: any[] = [];
  ContactData: any = {
    ContactDataId: 0,
    Name: '',
    Email: '',
    Mobile: ''
  };
  public onCellClicked(params: any) {
    if (params.event.target.tagName === 'BUTTON') {
      const actionType = params.event.target.getAttribute('data-action-type');
      const dataItem = params.data;
      switch (actionType) {
        case 'editFormData':
          this.editFormData(dataItem);
          break;
        case 'removeFormData':
          this.removeFormData(dataItem);
          break;
      }
    }
  }
  public editFormData(item: any) {
    this.router.navigate(['reactiveforms'], { queryParams: { id: item.ContactDataId } });
  }
  AddNewEntry() {
    this.router.navigate(['reactiveforms']);
  }
  removeFormData(item: any) {
    let index = this.contactFormArr.findIndex(obj => obj.ContactDataId === item.ContactDataId);
    if (index !== -1) {
      this.contactFormArr.splice(index, 1);
    }
    localStorage.setItem("studentlist", JSON.stringify(this.contactFormArr));
    const existingData = localStorage.getItem("studentlist");
    if (existingData) {
      this.contactFormArr = JSON.parse(existingData);
    } else {
      this.contactFormArr = [];
    }
  }
  ngOnInit(): void {
    const existingData = localStorage.getItem("studentlist");
    if (existingData) {
      this.contactFormArr = JSON.parse(existingData);
    }
  }
}
