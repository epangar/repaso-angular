import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSiblingComponent } from './first-sibling.component';

describe('FirstSiblingComponent', () => {
  let component: FirstSiblingComponent;
  let fixture: ComponentFixture<FirstSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
