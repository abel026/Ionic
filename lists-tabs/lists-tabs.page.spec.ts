import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsTabsPage } from './lists-tabs.page';

describe('ListsTabsPage', () => {
  let component: ListsTabsPage;
  let fixture: ComponentFixture<ListsTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
