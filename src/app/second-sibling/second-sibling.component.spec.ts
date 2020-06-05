import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSiblingComponent } from './second-sibling.component';

describe('SecondSiblingComponent', () => {
  let component: SecondSiblingComponent;
  let fixture: ComponentFixture<SecondSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
