import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParamsIdComponent } from './url-params-id.component';

describe('UrlParamsIdComponent', () => {
  let component: UrlParamsIdComponent;
  let fixture: ComponentFixture<UrlParamsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlParamsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlParamsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
