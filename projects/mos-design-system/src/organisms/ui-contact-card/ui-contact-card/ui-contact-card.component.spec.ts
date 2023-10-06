import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactData, UiContactCardComponent } from './ui-contact-card.component';

const MOCK_CONTACT: ContactData = {
  id: "123",
  email: "santy1446@gmail.com",
  job: "Software developer",
  name: "Santiago Tapasco Giraldo",
  phone: "300000000",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPUrvq_PqcJ6xThm45NFBRnGYPElU28gAw&usqp=CAU"
}

describe('UiContactCardComponent', () => {
  let component: UiContactCardComponent;
  let fixture: ComponentFixture<UiContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when onEmitAction is called', () => {
    const EMIT_SPY = spyOn(component.emitAction, "emit");
    component.onEmitAction("delete", MOCK_CONTACT);
    expect(EMIT_SPY).toHaveBeenCalled();
  });
});
