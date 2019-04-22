import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComidaPage } from './menu-comida.page';

describe('MenuComidaPage', () => {
  let component: MenuComidaPage;
  let fixture: ComponentFixture<MenuComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComidaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
