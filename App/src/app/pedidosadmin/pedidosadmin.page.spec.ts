import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosadminPage } from './pedidosadmin.page';

describe('PedidosadminPage', () => {
  let component: PedidosadminPage;
  let fixture: ComponentFixture<PedidosadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
