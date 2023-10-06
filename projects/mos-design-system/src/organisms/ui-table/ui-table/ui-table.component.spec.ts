import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsAvailable, TableHeaders, UiTableComponent } from './ui-table.component';
import { FormsModule } from '@angular/forms';
import { UiButtonModule, UiInputModule } from 'mos-design-system';

const MOCK_TABLE_DATA = [
  
  {
    name: "Luz",
    last_name: "Rivera",
    age: 20,
    city: "Veracruz"
  },
  {
    name: "Ragnar",
    last_name: "Tapasco",
    age: 1,
    city: "Manizales"
  },
  {
    name: "Santy",
    last_name: "Tapasco",
    age: 24,
    city: "Manizales"
  },
]

const MOCK_TABLE_HEADERS : TableHeaders[] = [
  {
    label: "Name",
    keyName: "name",
    type: 'text'
  }
]

const MOCK_SINGLE_ELEMENT = {
  name: "Luz",
  last_name: "Rivera",
  age: 20,
  city: "Veracruz"
}

const MOCK_TABLE_OPTION: OptionsAvailable = {
  label: "View details",
  icon: "fas fa-info"
}

describe('UiTableComponent', () => {
  let component: UiTableComponent;
  let fixture: ComponentFixture<UiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTableComponent ],
      imports: [
        FormsModule,
        UiButtonModule,
        UiInputModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('currentPage should change if pageChanged is called', () => {
    component.pageChanged(2);
    expect(component.currentPage).toBe(2);
  });

  it('items should be ordered ascending when sortData is called', () => {
    component.items = MOCK_TABLE_DATA;
    component.sortData('age');
    expect(component.items[0].name).toBe("Ragnar");
  });

  it('items should be ordered descending when sortData is called', () => {
    component.items = MOCK_TABLE_DATA;
    component.sortBy = 'age';
    component.sortOrder = 'asc'
    component.sortData('age');
    expect(component.items[0].name).toBe("Santy");
  });

  it('should update propertie "showOptions" to true when clickOptionsButton is called', () => {
    component.items = MOCK_TABLE_DATA;
    const MOCK_ITEM: any = MOCK_TABLE_DATA[0];
    MOCK_ITEM.showOptions = false;
    component.clickOptionsButton(MOCK_ITEM);
    expect(MOCK_ITEM.showOptions).toBeTruthy();
  });

  it('should return the cell data when getDataToShow is called', () => {
    const RESULT = component.getDataToShow(MOCK_SINGLE_ELEMENT, MOCK_TABLE_HEADERS[0]);
    expect(RESULT).toBe("Luz");
  });

  it('should emit when sendElementSelected is called', () => {
    const EMIT_SPY = spyOn(component.emitElementSelected, "emit");
    const MOCK_ITEM: any = MOCK_TABLE_DATA[0];
    MOCK_ITEM.showOptions = true;
    component.sendElementSelected(MOCK_ITEM, MOCK_TABLE_OPTION);
    expect(MOCK_ITEM.showOptions).toBeFalsy();
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
