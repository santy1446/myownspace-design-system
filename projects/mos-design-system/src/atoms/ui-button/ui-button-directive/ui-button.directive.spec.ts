import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component} from '@angular/core';
import { UiButtonDirective } from './ui-button.directive';

// creating a test component in the spec file
@Component(
  {
    selector: 'mos-button-test',
    template: `
    <button mosUiButton class="mos-button-secondary">Modal</button>
    `
  }
)
class TestButtonComponent { }

describe('UiButtonDirective', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestButtonComponent, UiButtonDirective]
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
