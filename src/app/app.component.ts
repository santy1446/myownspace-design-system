import { Component, ViewChild , AfterViewInit } from '@angular/core';
import { UiModalComponent } from 'projects/mos-design-system/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myModal') myTestModal: UiModalComponent = {} as any;

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

  openModal() : void {
    this.myTestModal.openModal();
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
}
