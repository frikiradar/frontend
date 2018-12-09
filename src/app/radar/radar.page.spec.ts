import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarPage } from './radar.page';

describe('RadarPage', () => {
  let component: RadarPage;
  let fixture: ComponentFixture<RadarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
