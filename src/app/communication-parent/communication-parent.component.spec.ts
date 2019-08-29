import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationParentComponent } from './communication-parent.component';

describe('CommunicationParentComponent', () => {
  let component: CommunicationParentComponent;
  let fixture: ComponentFixture<CommunicationParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
