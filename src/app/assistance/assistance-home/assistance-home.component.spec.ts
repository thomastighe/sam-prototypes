import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceHomeComponent } from './assistance-home.component';

describe('AssistanceHomeComponent', () => {
  let component: AssistanceHomeComponent;
  let fixture: ComponentFixture<AssistanceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
