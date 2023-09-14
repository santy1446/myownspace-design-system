import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToastComponent } from './ui-toast.component';

describe('UiToastComponent', () => {
  let component: UiToastComponent;
  let fixture: ComponentFixture<UiToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a notification when createNotification is called', () => {
    const spyDeleteFunction = spyOn<any>(component, 'deleteNotification');
    component.createNotification("success", "Test", 3000);
    expect(component.notificationArray.length).toBe(1);
    expect(spyDeleteFunction).toHaveBeenCalled();
  });

  it('should delete a notification when deleteNotification is called', async () => {
    const idNotificationTest = 12345;
    const waitTimeNotification = 200;
    component.notificationArray = [{
      id: idNotificationTest,
      type: "success",
      message: "test",
      duration: waitTimeNotification
    }];
    expect(component.notificationArray.length).toBe(1);
    component["deleteNotification"](idNotificationTest, waitTimeNotification);
    await new Promise(resolve => setTimeout(resolve, waitTimeNotification));
    expect(component.notificationArray.length).toBe(0);

  });
});
