import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSiblingsComponent } from './reactive-siblings.component';

describe('ReactiveSiblingsComponent', () => {
  let component: ReactiveSiblingsComponent;
  let fixture: ComponentFixture<ReactiveSiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
