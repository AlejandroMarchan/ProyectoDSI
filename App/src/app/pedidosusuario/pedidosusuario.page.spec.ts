import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosusuarioPage } from './pedidosusuario.page';

describe('PedidosusuarioPage', () => {
  let component: PedidosusuarioPage;
  let fixture: ComponentFixture<PedidosusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosusuarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
