import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mos-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent implements OnInit {

  @Input() tableHeaders: TableHeaders[] = [];
  @Input() tableOptions: OptionsAvailable[] = [];
  @Input() itemsPerPage: 5 | 10 | 20 = 5;
  @Input() items: any[] = [];
  @Output() emitElementSelected = new EventEmitter<OptionSelected>();
  
  totalItems = this.items.length;
  currentPage = 1;
  sortBy = '';
  sortOrder = 'asc';

  ngOnInit(): void {
    this.resetActionsStatus();
  }

  resetActionsStatus() {
    this.items = this.items.map((element: any) => ({
      ...element,
      showOptions: false
    }));
  }

  pageChanged(event: number): void {
    this.currentPage = event;
  }

  sortData(column: string) {
    if (this.sortBy === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortOrder = 'asc';
    }

    this.items.sort((a, b) => {
      const aValue = a[this.sortBy];
      const bValue = b[this.sortBy];

      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getNumberOfPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  clickOptionsButton(item: any) {
    const IS_ALREADY_SELECTED = item.showOptions;
    this.items.forEach(elm => {
      elm.showOptions = false;
    })
    item.showOptions = !IS_ALREADY_SELECTED;
  }

  getDataToShow(item: any, header: TableHeaders): string{
    return item[`${header.keyName}`];
  }

  sendElementSelected(item, option: OptionsAvailable) {
    const DATA_TO_SEND: OptionSelected = {
      rowSelected: item,
      actionSelected: option
    }
    item.showOptions = false;  
    this.emitElementSelected.emit(DATA_TO_SEND);
  }

}

export interface TableHeaders {
  label: string;
  keyName: string;
  type: "text" | "numbers"
};
export interface OptionsAvailable {
  label: string;
  icon: string;
};
export interface OptionSelected {
  rowSelected: any;
  actionSelected: OptionsAvailable
}
