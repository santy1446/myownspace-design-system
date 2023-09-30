import { Component, ViewChild , AfterViewInit } from '@angular/core';
import { UiLoaderComponent, UiModalComponent, UiToastComponent, NoteData, TableHeaders, OptionsAvailable } from 'projects/mos-design-system/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myModal') myTestModal: UiModalComponent = {} as any;
  @ViewChild('myLoader') myTestLoader: UiLoaderComponent = {} as any;
  @ViewChild('myToast') myToast: UiToastComponent = {} as any;

  ngAfterViewInit() {}

  title = 'myownspace-design-system';
  links = [
    {
      name: "Option 1",
      route: "route/1",
      type: "link"
    },
    {
      name: "Option 2",
      route: "route/2",
      type: "link"
    }
  ]

  generalLinks = [
    {
      categoryName: "Services",
      categoryLinks: [
        {
          name: "ToDo",
          route: "route",
          type: "link"
        },
        {
          name: "Notes",
          route: "route",
          type: "link"
        }
      ]
    },
    {
      categoryName: "About",
      categoryLinks: [
        {
          name: "This project",
          route: "route",
          type: "link"
        },
        {
          name: "Me",
          route: "route",
          type: "link"
        }
      ]
    }
  ]

  iconsInfo = {
    title: "Contact me",
    buttons: [
      {
        name: "LinkedIn",
        icon: "fab fa-linkedin-in",
        type: "link"
      }
    ]
  }

  noteData: NoteData = {
    id: 'qwe123',
    title: 'Note title',
    body: 'This is a note body'
  }

  tableHeader: TableHeaders[] = [
    {
      label: "Name",
      keyName: "name",
      type: 'text'
    },
    {
      label: "Last name",
      keyName: "last_name",
      type: 'text'
    },
    {
      label: "Age",
      keyName: "age",
      type: 'numbers'
    },
    {
      label: "City",
      keyName: "city",
      type: 'text'
    },
  ];

  tableOptions: OptionsAvailable[] = [
    {
      label: "View details",
      icon: "fas fa-info"
    },
    {
      label: "Delete",
      icon: "fas fa-trash"
    }
  ]

  tableItems: any[] = [
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    },
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    },
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    },
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    },
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    },
    {
      name: "Santy",
      last_name: "Tapasco",
      age: 24,
      city: "Manizales"
    }
  ]


  openModal() : void {
    this.myTestModal.openModal();
  }

  showLoader() : void {
    this.myTestLoader.showLoader();
    setTimeout(() => {
      this.myTestLoader.hideLoader();
    }, 5000);
  }

  showLoginData(event : any): void{
    console.log(event);
  }

  showRegisterData(event : any): void{
    console.log(event);
  } 

  showElementHeaderSelected(event : any){
    console.log(event);
  }

  getLinkSelected(event : any) {
    console.log(event);
  }

  getIconSelected(event : any) {
    console.log(event);
  }

  showToast(): void {
    this.myToast.createNotification(
      'success',
      'Su información fue guardada correctamente',
      3000
    );

    this.myToast.createNotification(
      'error',
      'Ha ocurrido un error, por favor intente más tarde',
      3000
    );

    this.myToast.createNotification(
      'info',
      'Está seguro?',
      3000
    );
  }

  acceptButtonModal(event : boolean): void {
    console.log(event);
  }

  onSaveNote(note: NoteData){
    console.log(note);
  }

  onDeleteNote(note: NoteData | boolean) {
    console.log(note);
  }

  optionTableSelected(data: any) {
    console.log(data);
    
  }
}
