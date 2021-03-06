import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabankSearchComponent } from './databank-search.component';

describe('DatabankSearchComponent', () => {
  let component: DatabankSearchComponent;
  let fixture: ComponentFixture<DatabankSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
