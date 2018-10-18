import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTabsPage } from './no-tabs.page';

describe('NoTabsPage', () => {
  let component: NoTabsPage;
  let fixture: ComponentFixture<NoTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
