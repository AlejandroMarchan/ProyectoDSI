import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMenuPage } from './nuevo-menu.page';

describe('NuevoMenuPage', () => {
  let component: NuevoMenuPage;
  let fixture: ComponentFixture<NuevoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
