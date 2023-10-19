import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telafilho1Component } from './telafilho1.component';

describe('Telafilho1Component', () => {
  let component: Telafilho1Component;
  let fixture: ComponentFixture<Telafilho1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Telafilho1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Telafilho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
