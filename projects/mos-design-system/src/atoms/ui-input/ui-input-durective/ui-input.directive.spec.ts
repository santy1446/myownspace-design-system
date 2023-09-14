import { Component, ElementRef, Renderer2 } from '@angular/core';
import { UiInputDirective } from './ui-input.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component(
  {
    selector: 'mos-input-test',
    template: `
    <input mosUiInput type="text">
    `
  }
)
class TestInputComponent { }

describe('UiInputDirective', () => {

  let component: TestInputComponent;
  let fixture: ComponentFixture<TestInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestInputComponent, UiInputDirective]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
