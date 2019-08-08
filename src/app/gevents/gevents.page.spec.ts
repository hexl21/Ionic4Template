import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeventsPage } from './gevents.page';

describe('GeventsPage', () => {
  let component: GeventsPage;
  let fixture: ComponentFixture<GeventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
